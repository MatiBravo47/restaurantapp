import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        
        {/*Mesa 1 */}
        <a
          className="bg-lime-600 group rounded-lg border border-transparent px-5 py-4 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Mesa 1{' '}
          </h2>
          <div className="w-full max-w-xs">
            <label htmlFor="seleccion" className="block text-gray-700 text-sm font-bold mb-2"></label>
              <select id="seleccion" name="seleccion" className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:outline-none focus:border-blue-300">
                <option value="opcion1">Disponible</option>
                <option value="opcion2">Ocupado</option>
              </select>
          </div>

        </a>

        {/*Mesa 2 */}
        <a
          className="bg-red-600 group rounded-lg border border-transparent px-5 py-4 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Mesa 2{' '}
          </h2>
          <div className="w-full max-w-xs">
            <label htmlFor="seleccion" className="block text-gray-700 text-sm font-bold mb-2"></label>
              <select id="seleccion" name="seleccion" className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:outline-none focus:border-blue-300">
                <option value="opcion1">Disponible</option>
                <option value="opcion2">Ocupado</option>
              </select>
          </div>
        </a>

        {/*Mesa 3 */}
        <a
          className=" bg-red-600 group rounded-lg border border-transparent px-5 py-4 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Mesa 3{' '}
          </h2>
          <div className="w-full max-w-xs">
            <label htmlFor="seleccion" className="block text-gray-700 text-sm font-bold mb-2"></label>
              <select id="seleccion" name="seleccion" className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:outline-none focus:border-blue-300">
                <option value="opcion1">Disponible</option>
                <option value="opcion2">Ocupado</option>
              </select>
          </div>
        </a>


        {/*Mesa 4 */}
        <a
          className="bg-lime-600 group rounded-lg border border-transparent px-5 py-4 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Mesa 4{' '}
          </h2>
          <div className="w-full max-w-xs">
            <label htmlFor="seleccion" className="block text-gray-700 text-sm font-bold mb-2"></label>
              <select id="seleccion" name="seleccion" className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:outline-none focus:border-blue-300">
                <option value="opcion1">Disponible</option>
                <option value="opcion2">Ocupado</option>
              </select>
          </div>
        </a>
      </div>
    </main>
  )
}
