import './Header.css'

const Header = () => {
    return(
<div className="app-header">
  <div className="brand">
    <div className="brand-mark">S</div>
    <div className="brand-name">Shelf</div>
  </div>
  <div className="view-switch">
    <button className="view-btn active" data-screen="shelf">
      Моя полка
    </button>
    <button className="view-btn" data-screen="stats">
      Статистика
    </button>
  </div>
</div>

    )
}

export default Header