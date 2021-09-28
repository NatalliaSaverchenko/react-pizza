import { useEffect } from 'react'
import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Categories, SortPopup, PizzaBlock, LoadingBlock } from "../../components"
import { setCategory, setSortBy } from '../../redux/actions/filtersActions'
import { fetchPizzas } from '../../redux/actions/pizzasActions'

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [
  {name: 'популярности', type: 'popular', order: 'desc'}, 
  {name: 'цене', type: 'price', order: 'desc'}, 
  {name: 'алфавиту', type: 'name', order: 'asc'}]

const Home = () => {
  const dispatch = useDispatch()
  
  const items = useSelector(store => store.pizzas.items)
  const isLoaded = useSelector(store => store.pizzas.isLoaded)
  const {categories, sortBy} = useSelector(store => store.filters)

useEffect(() => {
  // fetch('http://localhost:3000/db.json')
  // .then(response => response.json())
  // .then(json => setPizzas(json.pizzas))
  dispatch(fetchPizzas(sortBy, categories))
  
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [categories, sortBy])
  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index))
  }, [dispatch])

  const onSelectSortType = useCallback((type) => {
    dispatch(setSortBy(type))
  }, [dispatch])

    return (
        <div className="container">
        <div className="content__top"> 
         <Categories 
         activeCategory={categories}
         onClickCategory={onSelectCategory}
         items={categoryNames}
         />
         <SortPopup activeSortType={sortBy.type} items={sortItems} onClickSortType={onSelectSortType}/>
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {
            isLoaded ?
            items.map(obj => <PizzaBlock key={obj.id} isLoading={true} {...obj}/>)
            : Array(12).fill(0).map((item, index) => {return <LoadingBlock key={index}/>})
          }
      
        </div>
      </div>
    )
}
export default Home
