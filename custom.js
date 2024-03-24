const useFetch = (url) => {
  // complete this
  const [loading, setLoading] = useState('true');
  const [data, setData] = useState();

  const fetchData = fetch(url).then((response) => {
    setData(response.json());
    setLoading(false);
  }).catch((error) => {

  })
 
  return {
    data,
    fetchData,
    loading
  }
};

export default function App() {
  const { data, fetchData, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  return (
<div className="App">
<button onClick={fetchData}>Fetch data</button>
      {!loading && (
<>
<ul>
            {data.map((todo) => {
              return <li>{todo.title}</li>;
            })}
</ul>
</>
      )}
<h1>Hello CodeSandbox</h1>
<h2>Start editing to see some magic happen!</h2>
</div>
  );
}