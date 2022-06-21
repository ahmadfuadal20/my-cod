/* This example requires Tailwind CSS v2.0+ */
import Navbar from '../components/Navbar'
import Footers from '../components/Footers'
const features = [
  { name: 'Merek', description: 'Patagonia' },
  { name: 'Bahan', description: 'Hitam Pekat, - 50% Cotton / 50% Polyester Heather Black , /Black - 70% Cotton / 30% Polyester Iron Ore Heather.' },
  { name: 'Ukuran', description: 'S  M  L  XL  XXL' },
  { name: 'Gaya', description: 'Casual' },
  { name: 'Motif', description: 'Polos' },
  { name: 'Harga', description: 'Rp.300.000' },
]

export default function Example() {
  return (
    <>
    <Navbar />
    <div className="bg-gray-400">
      <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Patagonia Hoodie</h2>
          <p className="mt-4 text-gray-600">
          hoodie Patagonia premium full tag bahan dijamin tebal, lembut dan tidak akan berbulu.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src="https://drive.google.com/uc?export=view&id=1j1NGUsp_FE5__o_8Lp0RsydmAuRJ7T8n"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="bg-gray-100 rounded-lg"
          />
          <img
            src="https://drive.google.com/uc?export=view&id=1jAmCT6U1NposC-bPrdofBBJWhp7vFKq4"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="bg-gray-100 rounded-lg"
          />
          <img
            src="https://drive.google.com/uc?export=view&id=1j7mYRWAB3Z-WBt9s12G1gA89hSdmOmoh"
            alt="Side of walnut card tray with card groove and recessed card area."
            className="bg-gray-100 rounded-lg"
          />
          <img
            src="https://drive.google.com/uc?export=view&id=1jCSgWK-QVAh8gOq1C0Ijv_OPRWETBM6_"
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="bg-gray-100 rounded-lg"
          />
        </div>
      </div>
    </div>
    <Footers />
    </>
  )
}