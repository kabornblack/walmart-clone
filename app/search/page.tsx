import Product from "@/components/Product";
import fetchSearch from "@/lib/fetchSearch";

type Props = {
  searchParams: {
    q: string;
  };
};

async function SearchPage({ searchParams: { q } }: Props) {
  // Fetch the results from Oxylabs
  const results = await fetchSearch(q);

  // Check if data from Oxylabs exists
  const hasResults =
    results && results.content && results.content.organic?.length > 0;

  return (
    <div className="p-10 space-y-2">
      <h1 className="text-3xl font-bold mb-2">Result for {q}</h1>

      {hasResults ? (
        <>
          {/* Display total results */}
          <h2>({results.content.total_results} results)</h2>

          {/* Display product list */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {results.content.organic.map((product) => (
              <li key={product.product_id}>
                <Product product={product} />
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div className="h-40 w-30 bg-slate-200 text-center p-8">
          <h2>Couldn&apos;t get results from Oxylabs</h2>
          <div className="flex items-center justify-center space-x-1 pt-3">
            <h4 className="text-2xl">⚠️</h4>
            <h2>Attention needed</h2>
          </div>
          {/* Redirect to Oxylabs page */}
          <a
            href="https://oxylabs.io/"
            target="_blank"
            className="underline text-blue-600 pt-4 block"
          >
            Visit Oxylabs for more info
          </a>
        </div>
      )}
    </div>
  );
}

export default SearchPage;
