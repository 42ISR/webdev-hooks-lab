import './ScreenShelf.css'

const ScreenShelf = () => {

    return(
<section className="screen active" id="screen-shelf">
  <p className="greeting">Добрый вечер</p>
  <p className="greeting-sub" id="shelfSubtitle">
    На полке пока пусто
  </p>
  <div className="add-book-row">
    <input className="input" id="bookInput" placeholder="Название книги..." />
    <button className="btn" id="addBtn">
      Добавить на полку
    </button>
  </div>
  <div className="list-toolbar">
    <span className="toolbar-title">Книги</span>
    <div className="filter-chip">
      <input type="checkbox" id="filterCheckbox" />
      <label htmlFor="filterCheckbox">
        <span className="dot" />
        Только непрочитанные
      </label>
    </div>
  </div>
  <div className="book-list" id="bookList" />
</section>

    )
} 

export default ScreenShelf