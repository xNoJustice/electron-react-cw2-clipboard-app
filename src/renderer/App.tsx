import React, { useState, useEffect } from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';

const data = [
  { id: 11, text: 'Lykos', code: '/find 191', category: 'Super Elite' },
  { id: 2, text: 'Scrofa', code: '/find 192', category: 'Super Elite' },
  { id: 3, text: 'Bera', code: '/find 193', category: 'Super Elite' },
  { id: 11, text: 'Tigris', code: '/find 194', category: 'Super Elite' },
  { id: 11, text: 'Mahon', code: '/find 491', category: 'Super Elite' },
  { id: 11, text: 'Bo', code: '/find 492', category: 'Super Elite' },
  { id: 11, text: 'Goo-Pae', code: '/find 493', category: 'Super Elite' },
  { id: 11, text: 'Chuong', code: '/find 494', category: 'Super Elite' },
  {
    id: 11,
    text: 'Brutaler Hauptmann',
    code: '/find 591',
    category: 'Super Elite',
  },
  { id: 11, text: 'Oberork', code: '/find 691', category: 'Super Elite' },
  {
    id: 11,
    text: 'Dunkler Oberork',
    code: '/find 692',
    category: 'Super Elite',
  },
  {
    id: 12,
    text: 'Geister Orkführer',
    code: '/find 693',
    category: 'Super Elite',
  },
  {
    id: 13,
    text: 'Dunkler Anführer',
    code: '/find 791',
    category: 'Super Elite',
  },
  { id: 14, text: 'Plagenträger', code: '/find 992', category: 'Super Elite' },
  {
    id: 15,
    text: 'Riesiger Plagenträger',
    code: '/find 993',
    category: 'Super Elite',
  },
  {
    id: 16,
    text: 'Stolzer Dämonenkönig',
    code: '/find 1092',
    category: 'Super Elite',
  },
  { id: 17, text: 'Death Reaper', code: '/find 1093', category: 'Super Elite' },
  {
    id: 18,
    text: 'Gemeiner Dämonenkönig',
    code: '/find 1094',
    category: 'Super Elite',
  },
  { id: 19, text: 'Blue Death', code: '/find 1095', category: 'Super Elite' },
  { id: 20, text: 'Ice Witch', code: '/find 1191', category: 'Super Elite' },
  {
    id: 21,
    text: 'Gelber Tigergeist',
    code: '/find 1304',
    category: 'Super Elite',
  },
  {
    id: 22,
    text: 'Tausendkämpfer',
    code: '/find 1403',
    category: 'Super Elite',
  },
  { id: 23, text: 'Nine Tails', code: '/find 1901', category: 'Super Elite' },
  {
    id: 24,
    text: 'Elite Nine Tails',
    code: '/find 1902',
    category: 'Super Elite',
  },
  {
    id: 25,
    text: 'Elite Nine Tails 2',
    code: '/find 1903',
    category: 'Super Elite',
  },
  {
    id: 26,
    text: 'Dark Nine Tails',
    code: '/find 1904',
    category: 'Super Elite',
  },
  {
    id: 27,
    text: 'Königinnenspinne',
    code: '/find 2091',
    category: 'Super Elite',
  },
  { id: 28, text: 'Königsspinne', code: '/find 2092', category: 'Super Elite' },
  {
    id: 29,
    text: 'Dunkl. Königinnenspinne',
    code: '/find 2093',
    category: 'Super Elite',
  },
  { id: 30, text: 'Flammenkönig', code: '/find 2206', category: 'Super Elite' },
  { id: 31, text: 'Roter Drache', code: '/find 2291', category: 'Super Elite' },
  {
    id: 32,
    text: 'Giant Ghost Tree',
    code: '/find 2306',
    category: 'Super Elite',
  },
  {
    id: 33,
    text: 'Ghost Tree Lord',
    code: '/find 2307',
    category: 'Super Elite',
  },
  {
    id: 34,
    text: 'Setaou-Hauptmann',
    code: '/find 2491',
    category: 'Super Elite',
  },
  { id: 35, text: 'Wasserdrache', code: '/find 2493', category: 'Super Elite' },
  { id: 36, text: 'Zombiekönig', code: '/find 2591', category: 'Super Elite' },
  {
    id: 37,
    text: 'Zombiekönig 2',
    code: '/find 2592',
    category: 'Super Elite',
  },
  {
    id: 38,
    text: 'Zombiekönig 3',
    code: '/find 2593',
    category: 'Super Elite',
  },
  {
    id: 39,
    text: 'Zombiekönig 4',
    code: '/find 2594',
    category: 'Super Elite',
  },
  {
    id: 40,
    text: 'Zombiekönig 5',
    code: '/find 2595',
    category: 'Super Elite',
  },
  {
    id: 41,
    text: 'Zombiekönig 6',
    code: '/find 2596',
    category: 'Super Elite',
  },
  { id: 42, text: 'Zombiegott', code: '/find 2597', category: 'Super Elite' },
  { id: 43, text: 'Zombiegott 2', code: '/find 2598', category: 'Super Elite' },
  { id: 44, text: 'Lord Gnoll', code: '/find 3090', category: 'Super Elite' },
  {
    id: 45,
    text: 'Oberste Gnoll-Wache',
    code: '/find 3091',
    category: 'Super Elite',
  },
  { id: 46, text: 'Arges', code: '/find 3190', category: 'Super Elite' },
  { id: 47, text: 'Arges 2', code: '/find 7190', category: 'Super Elite' },
  { id: 48, text: 'Polyphemos', code: '/find 3191', category: 'Super Elite' },
  { id: 49, text: 'Rakshasa', code: '/find 3290', category: 'Super Elite' },
  { id: 50, text: 'Martyaxwar', code: '/find 3291', category: 'Super Elite' },
  {
    id: 51,
    text: 'Lemuren-Fürst',
    code: '/find 3390',
    category: 'Super Elite',
  },
  {
    id: 52,
    text: 'Lemurische Leibgarde',
    code: '/find 3391',
    category: 'Super Elite',
  },
  {
    id: 53,
    text: 'General Kappa',
    code: '/find 3490',
    category: 'Super Elite',
  },
  {
    id: 54,
    text: 'General Kappa 2',
    code: '/find 4490',
    category: 'Super Elite',
  },
  { id: 55, text: 'Triton', code: '/find 3491', category: 'Super Elite' },
  { id: 56, text: 'Triton 2', code: '/find 4491', category: 'Super Elite' },
  {
    id: 57,
    text: 'Knochengesicht',
    code: '/find 3590',
    category: 'Super Elite',
  },
  {
    id: 58,
    text: 'Knochengesicht 2',
    code: '/find 3910',
    category: 'Super Elite',
  },
  {
    id: 59,
    text: 'Knochengesicht 3',
    code: '/find 4590',
    category: 'Super Elite',
  },
  {
    id: 60,
    text: 'Roter Häuptling',
    code: '/find 3591',
    category: 'Super Elite',
  },
  {
    id: 61,
    text: 'Roter Häuptling 2',
    code: '/find 4591',
    category: 'Super Elite',
  },
  {
    id: 62,
    text: 'Brutales Knochengesicht',
    code: '/find 3595',
    category: 'Super Elite',
  },
  {
    id: 63,
    text: 'Brutales Knochengesicht 2',
    code: '/find 4595',
    category: 'Super Elite',
  },
  {
    id: 64,
    text: 'Brutales Knochengesicht 3',
    code: '/find 7595',
    category: 'Super Elite',
  },
  {
    id: 65,
    text: 'Dunkles Knochengesicht',
    code: '/find 4006',
    category: 'Super Elite',
  },
  {
    id: 66,
    text: 'Brutaler Roter Häuptling',
    code: '/find 3596',
    category: 'Super Elite',
  },
  {
    id: 67,
    text: 'Brutaler Roter Häuptling 2',
    code: '/find 4596',
    category: 'Super Elite',
  },
  {
    id: 68,
    text: 'Brutaler Roter Häuptling 3',
    code: '/find 7596',
    category: 'Super Elite',
  },
  { id: 69, text: 'König Krabbs', code: '/find 3691', category: 'Super Elite' },
  { id: 70, text: 'Gargoyle', code: '/find 3790', category: 'Super Elite' },
  { id: 71, text: 'König Wobba', code: '/find 3791', category: 'Super Elite' },
  {
    id: 72,
    text: 'Captain Shruk',
    code: '/find 3890',
    category: 'Super Elite',
  },
  {
    id: 73,
    text: 'Der Große Oger',
    code: '/find 3891',
    category: 'Super Elite',
  },
  { id: 74, text: 'Weidenmann', code: '/find 3901', category: 'Super Elite' },
  { id: 75, text: 'Eoten', code: '/find 3902', category: 'Super Elite' },
  { id: 76, text: 'Skouman', code: '/find 3903', category: 'Super Elite' },
  {
    id: 77,
    text: 'General Lobster',
    code: '/find 4690',
    category: 'Super Elite',
  },
  { id: 78, text: 'King Krabbs', code: '/find 4691', category: 'Super Elite' },
  { id: 79, text: 'Razador', code: '/find 6091', category: 'Super Elite' },
  { id: 80, text: 'Nemere', code: '/find 6191', category: 'Super Elite' },
  { id: 81, text: 'Nemere 2', code: '/find 6291', category: 'Super Elite' },
  {
    id: 82,
    text: 'Shadow Nemere',
    code: '/find 20528',
    category: 'Super Elite',
  },
  { id: 83, text: 'Groot', code: '/find 6351', category: 'Super Elite' },
  { id: 84, text: 'Groot 2', code: '/find 6451', category: 'Super Elite' },
  { id: 85, text: 'Deku', code: '/find 6391', category: 'Super Elite' },
  { id: 86, text: 'Falric', code: '/find 6452', category: 'Super Elite' },
  { id: 87, text: 'Giant Deku', code: '/find 6491', category: 'Super Elite' },
  { id: 88, text: 'Uber Azrael', code: '/find 8527', category: 'Super Elite' },
  {
    id: 89,
    text: 'Uber Tiger Ghost',
    code: '/find 8528',
    category: 'Super Elite',
  },
  {
    id: 90,
    text: 'Uber Flame King',
    code: '/find 8529',
    category: 'Super Elite',
  },
  { id: 91, text: 'Uber Dragon', code: '/find 8530', category: 'Super Elite' },
  {
    id: 92,
    text: 'Riesiger Arges',
    code: '/find 20530',
    category: 'Super Elite',
  },
  {
    id: 93,
    text: 'Caelestrasz (Human)',
    code: '/find 20630',
    category: 'Super Elite',
  },
  {
    id: 94,
    text: 'Demonic Blacksmith',
    code: '/find 20678',
    category: 'Super Elite',
  },
  { id: 95, text: 'Dark Santa', code: '/find 20720', category: 'Super Elite' },
  { id: 96, text: 'Baphomet', code: '/find 20721', category: 'Super Elite' },
  { id: 97, text: 'Mr. Grinch', code: '/find 20605', category: 'Party Fever' },
  {
    id: 98,
    text: 'Demonic Blacksmith 1',
    code: '/find 20678',
    category: 'Party Fever',
  },
  { id: 99, text: 'Dark Santa', code: '/find 20720', category: 'Party Fever' },
  {
    id: 100,
    text: 'Demonic Blacksmith 2',
    code: '/find 20878',
    category: 'Party Fever',
  },
  { id: 101, text: 'Dracula', code: '/find 20858', category: 'Party Fever' },
  { id: 102, text: 'Abaddon', code: '/find 20948', category: 'Party Fever' },
  {
    id: 103,
    text: 'Metinstone of Drought',
    code: '/find 8139',
    category: 'Bounty',
  },
  {
    id: 104,
    text: 'Metinstone of Dust',
    code: '/find 8140',
    category: 'Bounty',
  },
  {
    id: 105,
    text: 'Metinstone of Fog',
    code: '/find 8141',
    category: 'Bounty',
  },
  {
    id: 106,
    text: 'Metinstone of Night',
    code: '/find 8142',
    category: 'Bounty',
  },
  { id: 107, text: 'Serket', code: '/find 20810', category: 'Bounty' },
  { id: 108, text: 'Aragog', code: '/find 20816', category: 'Bounty' },
  { id: 109, text: 'Cho gall', code: '/find 20821', category: 'Bounty' },
  { id: 110, text: 'Moro', code: '/find 20823', category: 'Bounty' },
  { id: 111, text: 'Exitus Seals', code: '/find 20955', category: 'Exitus' },
  {
    id: 112,
    text: 'Seal of Protection',
    code: '/find 20589',
    category: 'Exitus',
  },
  {
    id: 113,
    text: 'Metin of Dream',
    code: '/find 8160',
    category: 'Frosthain',
  },
  {
    id: 114,
    text: 'Metin of Quiet',
    code: '/find 8161',
    category: 'Frosthain',
  },
  {
    id: 115,
    text: 'Metin of Heaven',
    code: '/find 8162',
    category: 'Frosthain',
  },
  {
    id: 116,
    text: 'Metin of Fantasy',
    code: '/find 8163',
    category: 'Frosthain',
  },
  {
    id: 117,
    text: 'Metin of Expanse',
    code: '/find 8164',
    category: 'Frosthain',
  },
  { id: 118, text: 'Buko', code: '/find 6891', category: 'Frosthain' },
  { id: 119, text: 'Acheri', code: '/find 6892', category: 'Frosthain' },
  { id: 120, text: 'Soren', code: '/find 6893', category: 'Frosthain' },
  { id: 121, text: 'Magluz', code: '/find 6894', category: 'Frosthain' },
  { id: 122, text: 'Anansi', code: '/find 6895', category: 'Frosthain' },
];

const categories = [
  'Super Elite',
  'Party Fever',
  'Bounty',
  'Exitus',
  'Frosthain',
];

const Clipboard = () => {
  const [category, setCategory] = useState('Exitus');
  const [values, setValues] = useState(data);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setValues(data.filter((val) => val.category.includes(category)));
  }, [category]);

  const copyToClipboard = (text: string) => {
    const textarea = document.createElement('textarea');

    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    setVisible(true);
    setTimeout(() => setVisible(false), 500);
  };

  return (
    <div className="mt-5 ml-5">
      <div className="ml-2 mb-2">
        <label className="text-white" htmlFor="category">
          Choose a category
          <select
            className="block w-32 py-2 px-3 border rounded-md bg-blue-600 shadow-sm focus:outline-none"
            name="category"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option value={cat} key={cat}>
                {cat}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="text-white">Click any button to get /find xxx</div>
      <div className="flex flex-col justify-start items-start">
        {visible && (
          <div className="h-20 w-48 flex flex-col items-center justify-center font-sans">
            <div className="h-16 w-48 absolute flex items-center justify-center">
              <div className="bg-white rounded shadow p-2 m-2 text-center">
                <h1>Copied to Clipboard!</h1>
              </div>
            </div>
          </div>
        )}
        {values.map((val) => (
          <button
            className="py-2 px-4 m-1 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
            onClick={() => copyToClipboard(val.code)}
            key={val.id}
            type="button"
          >
            {val.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Clipboard} />
      </Switch>
    </Router>
  );
}
