import { useEffect, useMemo, useRef, useState } from 'react';
import { useRegisterSW } from 'virtual:pwa-register/react';

export function usePWAStatus() {
    const { offlineReady: [offlineReady], needRefresh: [needRefresh] } = useRegisterSW({
        immediate: true,
    });

    const supportsSW = useMemo(() => typeof window !== 'undefined' && 'serviceWorker' in navigator, []);
    const [progress, setProgress] = useState(0);
    const [isSyncing, setIsSyncing] = useState(false);
    const [isStalled, setIsStalled] = useState(false);
    const lastProgressChangeRef = useRef<number>(Date.now());

    useEffect(() => {
        if (!supportsSW || !offlineReady) {
            setProgress(0);
            return;
        }

        setProgress(100);
        setIsSyncing(false);
        setIsStalled(false);
    }, [offlineReady, supportsSW]);

    useEffect(() => {
        if (supportsSW && !offlineReady) {
            setIsSyncing(true);
        }
    }, [offlineReady, supportsSW]);

    useEffect(() => {
        if (!supportsSW || offlineReady) {
            return;
        }

        let isMounted = true;
        let currentWorker: ServiceWorker | null = null;

        const updateProgress = (value: number) => {
            if (!isMounted) {
                return;
            }

            setProgress((prev) => {
                if (value > prev) {
                    lastProgressChangeRef.current = Date.now();
                    setIsStalled(false);
                    return value;
                }

                return prev;
            });
        };

        const handleWorkerStateChange = () => {
            if (!currentWorker) return;
            
            switch (currentWorker.state) {
                case 'installing':
                    updateProgress(20);
                    break;
                case 'installed':
                    updateProgress(60);
                    break;
                case 'activating':
                    updateProgress(85);
                    break;
                case 'activated':
                    updateProgress(100);
                    setIsSyncing(false);
                    break;
                default:
                    break;
            }
        };

        const attachWorker = (worker: ServiceWorker) => {
            if (currentWorker === worker) return;
            if (currentWorker) {
                currentWorker.removeEventListener('statechange', handleWorkerStateChange);
            }
            
            currentWorker = worker;
            setIsSyncing(true);
            handleWorkerStateChange();
            worker.addEventListener('statechange', handleWorkerStateChange);
        };

        setIsSyncing(true);

        navigator.serviceWorker
            .getRegistration()
            .then((registration) => {
                if (!isMounted || !registration) {
                    return;
                }

                const worker = registration.installing ?? registration.waiting ?? registration.active;
                if (worker) {
                    attachWorker(worker);
                }

                const updateFoundHandler = () => {
                    if (registration.installing) {
                        attachWorker(registration.installing);
                    }
                };
                registration.addEventListener('updatefound', updateFoundHandler);

                return () => {
                    registration.removeEventListener('updatefound', updateFoundHandler);
                };
            })
            .catch(() => {
                if (isMounted) {
                    setIsSyncing(false);
                }
            });

        const stallInterval = window.setInterval(() => {
            if (offlineReady || progress >= 100) {
                return;
            }

            if (Date.now() - lastProgressChangeRef.current > 30_000) {
                setIsStalled(true);
            }
        }, 1_000);

        return () => {
            isMounted = false;
            if (currentWorker) {
                currentWorker.removeEventListener('statechange', handleWorkerStateChange);
            }
            window.clearInterval(stallInterval);
        };
    }, [offlineReady, progress, supportsSW]);

    const forceReload = () => {
        window.location.reload();
    };

    return { offlineReady, needRefresh, progress, isSyncing, isStalled, supportsSW, forceReload };
}
