import GridBlog from '../../assets/svg/grid-blog/grid-blog';
import GridLanding from '../../assets/svg/grid-landing/grid-landing';
import GridShop from '../../assets/svg/grid-shop/grid-shop';

function GridSelect({ gridType, setGridType }) {
  const changeGridTypeHandler = ({ target }) => setGridType(target.value);

  return (
    <form className="grid-select">
      <h2 className="grid-select__header">Выберите сетку сайта</h2>

      <input
        className="grid-select__radio visually-hidden"
        type="radio"
        name="grid"
        id="grid-landing"
        value="landing"
        checked={gridType === 'landing'}
        onChange={changeGridTypeHandler}
      />
      <label htmlFor="grid-landing" className="grid-select__btn">
        <span className="grid-select__text">Лендинг</span>
        <GridLanding />
      </label>

      <input
        className="grid-select__radio visually-hidden"
        type="radio"
        name="grid"
        id="grid-blog"
        value="blog"
        checked={gridType === 'blog'}
        onChange={changeGridTypeHandler}
      />
      <label htmlFor="grid-blog" className="grid-select__btn">
        <span className="grid-select__text">Блог</span>
        <GridBlog />
      </label>

      <input
        className="grid-select__radio visually-hidden"
        type="radio"
        name="grid"
        id="grid-shop"
        value="shop"
        checked={gridType === 'shop'}
        onChange={changeGridTypeHandler}
      />
      <label htmlFor="grid-shop" className="grid-select__btn">
        <span className="grid-select__text">Магазин</span>
        <GridShop />
      </label>
    </form>
  );
}

export default GridSelect;