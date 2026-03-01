import { CheckCircle, RefreshCw } from 'lucide-react';
import { useEffect, useState } from 'react';
import { usePWAStatus } from '../hooks/usePWAStatus';

export function PWASyncIndicator() {
    const { offlineReady, needRefresh, progress, isSyncing, isStalled, forceReload } = usePWAStatus();
    const [isVisible, setIsVisible] = useState(false);
    const [forceHide, setForceHide] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setForceHide(true);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (isSyncing || isStalled || needRefresh) {
            setIsVisible(true);
        }
    }, [isSyncing, isStalled, needRefresh]);

    useEffect(() => {
        if (offlineReady) {
            setIsVisible(true);
            const timer = setTimeout(() => {
                setIsVisible(false);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [offlineReady]);

    const progressStrokeOffset = 50 - (Math.min(Math.max(progress, 0), 100) / 100) * 50;
    const showSpinner = (needRefresh || !offlineReady) && isSyncing && progress < 100;

    if ((forceHide && !isStalled) || (!isVisible && !isStalled)) {
        return null;
    }

    return (
        <div className="relative flex items-center gap-2">
            <button
                type="button"
                className="inline-flex items-center"
                title="Zasoby Tredeco zsynchronizowane lokalnie"
                aria-label="Status synchronizacji offline"
            >
                {offlineReady ? (
                    <CheckCircle className="block h-4 w-4 text-green-500" />
                ) : (
                    <span className="relative block h-5 w-5">
                        <svg className="absolute inset-0 h-5 w-5 -rotate-90" viewBox="0 0 20 20">
                            <circle
                                cx="10"
                                cy="10"
                                r="8"
                                className="fill-none stroke-slate-300 dark:stroke-slate-700"
                                strokeWidth="2"
                            />
                            <circle
                                cx="10"
                                cy="10"
                                r="8"
                                className="fill-none stroke-emerald-500 transition-all duration-300"
                                strokeWidth="2"
                                strokeDasharray="50"
                                strokeDashoffset={progressStrokeOffset}
                            />
                        </svg>
                        <RefreshCw
                            className={`absolute inset-[2px] block h-4 w-4 text-gray-400 opacity-50 ${
                                showSpinner ? 'animate-spin' : ''
                            }`}
                        />
                    </span>
                )}
            </button>

            {isStalled ? (
                <div className="rounded-lg border border-slate-300 bg-white/95 px-2 py-1 text-xs text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-900/95 dark:text-slate-200">
                    <div className="flex items-center gap-2">
                        <span>Wykryto problem z połączeniem. Spróbuj odświeżyć stronę</span>
                        <button
                            type="button"
                            onClick={forceReload}
                            className="rounded-md border border-slate-300 px-2 py-0.5 text-[11px] font-medium hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-800"
                        >
                            Wymuś odświeżenie
                        </button>
                    </div>
                </div>
            ) : null}
        </div>
    );
}
