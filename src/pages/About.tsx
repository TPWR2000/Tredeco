import { ArrowLeft, Calendar, Compass, LayoutGrid, Rocket, ShieldCheck, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PWASyncIndicator } from '../components/PWASyncIndicator';

export function About() {
  return (
      <article className="mx-auto w-full max-w-4xl space-y-12 py-8 px-4">
        {/* Nagłówek - Jasny komunikat co to jest */}
        <header className="space-y-4 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            Nowoczesny Kalendarz Stały
          </p>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-slate-900 dark:text-white">
            System Tredeco
          </h2>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed text-slate-600 dark:text-slate-400">
            Tredeco to odpowiedź na chaos tradycyjnego kalendarza. Zaprojektowany dla maksymalnej prostoty, przewidywalności i Twojego świętego spokoju.
          </p>
        </header>

        {/* Kluczowe Cechy - Czytelne kafle */}
        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <Calendar className="mb-4 text-emerald-500" size={32} />
            <h3 className="text-lg font-bold">13 Pełnych Miesięcy</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm">
              Każdy z 13 miesięcy ma dokładnie 28 dni. Zapomnij o sprawdzaniu, czy luty ma 28 czy 29 dni.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <Compass className="mb-4 text-emerald-500" size={32} />
            <h3 className="text-lg font-bold">Start: 1 Marca</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm">
              Cykl zaczyna się wraz z astronomiczną wiosną. To naturalny moment na nowy początek.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <LayoutGrid className="mb-4 text-emerald-500" size={32} />
            <h3 className="text-lg font-bold">Stały Układ</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm">
              W danym roku każdy miesiąc wygląda identycznie. Jeśli 1. dzień to poniedziałek, będzie nim w każdym miesiącu.
            </p>
          </div>
        </section>

        {/* Miesiąc Limes - Wyjaśnienie mechaniki */}
        <section className="rounded-3xl bg-slate-50 p-8 dark:bg-slate-800/50">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <ShieldCheck className="text-emerald-500" /> Miesiąc Limes (14. Miesiąc)
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="font-bold text-slate-900 dark:text-white">Dzień Nilo</p>
              <p className="mt-1 text-slate-600 dark:text-slate-400">
                To 365. dzień roku – światowe święto zakończenia roku, które domyka cykl przed nadejściem Primo.
              </p>
            </div>
            <div>
              <p className="font-bold text-slate-900 dark:text-white">Dzień Bix</p>
              <p className="mt-1 text-slate-600 dark:text-slate-400">
                Dodatkowy dzień w latach przestępnych, który dba o to, by kalendarz był zawsze zgodny z ruchem Ziemi.
              </p>
            </div>
          </div>
          <div className="mt-6 border-t border-slate-200 pt-6 dark:border-slate-700">
            <p className="text-sm italic text-slate-500">
              <strong>Pływający tydzień:</strong> Aby zachować naturalną ciągłość dni, co rok kalendarz "przesuwa się" o jeden dzień (np. z poniedziałku na wtorek), ale wewnątrz danego roku układ pozostaje niezmienny.
            </p>
          </div>
        </section>

        {/* Zalety Biznesowe - Język korzyści */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold">Dlaczego warto?</h3>
          <div className="grid gap-4">
            <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-emerald-50 dark:hover:bg-emerald-950/20 transition-colors">
              <div className="bg-emerald-100 dark:bg-emerald-900 p-2 rounded-lg text-emerald-600">
                <Rocket size={20} />
              </div>
              <div>
                <p className="font-bold">Efektywność biznesowa</p>
                <p className="text-slate-600 dark:text-slate-400">Każdy miesiąc to równe 4 tygodnie. Planowanie wypłat, projektów i budżetów staje się dziecinnie proste.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-emerald-50 dark:hover:bg-emerald-950/20 transition-colors">
              <div className="bg-emerald-100 dark:bg-emerald-900 p-2 rounded-lg text-emerald-600">
                <LayoutGrid size={20} />
              </div>
              <div>
                <p className="font-bold">Ekstremalna przewidywalność</p>
                <p className="text-slate-600 dark:text-slate-400">Zawsze wiesz, w jaki dzień tygodnia wypadnie data za pół roku. Bez sprawdzania kalendarza.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-bold tracking-tight">Biorytm i Trening w Rytmie 28 Dni</h3>
          <div className="rounded-3xl bg-blue-50 p-6 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30">
            <p className="leading-relaxed text-slate-700 dark:text-slate-300">
              Większość procesów regeneracyjnych i hormonalnych w organizmie człowieka przebiega w cyklach zbliżonych do 28 dni. Tredeco, jako jedyny kalendarz, pozwala na <strong>perfekcyjne mapowanie Twojego biorytmu</strong>.
            </p>
            <ul className="mt-4 grid gap-4 md:grid-cols-2">
              <li className="flex gap-3">
                <div className="text-blue-600 font-bold">✓</div>
                <span><strong>Planowanie progresji:</strong> Stałe, 4-tygodniowe bloki treningowe pozwalają na idealne planowanie cykli (np. 3 tygodnie ciężkiej pracy i 1 tydzień regeneracji), które zawsze kończą się wraz z miesiącem.</span>
              </li>
              <li className="flex gap-3">
                <div className="text-blue-600 font-bold">✓</div>
                <span><strong>Monitorowanie nawyków:</strong> Twoje treningi w każdy wtorek wypadają zawsze w te same dni miesiąca (2, 9, 16, 23). To ułatwia analizę formy i porównywanie wyników miesiąc do miesiąca.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Kontakt - Wyciągnięty na wierzch */}
        <section className="rounded-3xl border-2 border-emerald-100 bg-emerald-50/50 p-8 dark:border-emerald-900/30 dark:bg-emerald-950/10 text-center">
          <h3 className="text-2xl font-bold mb-2">Masz pytania?</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Zauważyłeś błąd lub masz pomysł na usprawnienie kalendarza? Jesteśmy do Twojej dyspozycji.
          </p>
          <a
              href="mailto:kontakt@tredeco.pl"
              className="inline-flex items-center gap-2 text-lg font-bold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400"
          >
            <Mail size={20} /> kontakt@tredeco.pl
          </a>
        </section>

        {/* Powrót */}
        <footer className="pt-8 flex items-center justify-between border-t border-slate-200 dark:border-slate-800">
          <Link
              to="/kalendarz"
              className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-6 py-3 font-bold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
          >
            <ArrowLeft size={18} />
            Wróć do kalendarza
          </Link>
          <PWASyncIndicator />
        </footer>
      </article>
  );
}