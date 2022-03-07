return (
    <ul className='shopping-list'>
      {initialItems.map((item) => {
        return (
          <li>
            <button>{item.name.en}</button>
          </li>
        );
      })}
    </ul>

function App() {
    const [articles, setArticles] = useState(ItemsOnList);
  
    return (
      <div className='App'>
        <h1 className='Title'>shopping List</h1>
  
        <List initialItems={articles} />
      </div>
    );
  }