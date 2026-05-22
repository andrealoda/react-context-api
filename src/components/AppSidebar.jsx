
export default function AppSidebar({products, activeCategories, setActiveCategories}) {
  
  const filteredCategories = ["All", ...new Set(products.map(p => p.category))];
  // console.log(filteredCategories)

  return (
    <div className="sidebar-fixed glass-card p-3">
      <h4 className="p-1">Categorie</h4>

      <ul className="sidebar-menu">
        {filteredCategories.map(filteredCategory => (
          <li className="my-2" key={filteredCategory} onClick={() => setActiveCategories(filteredCategory)}>
            {filteredCategory}
          </li>
        ))}
      </ul>
    </div>
  )
}