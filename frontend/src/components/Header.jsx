import React from 'react';
import './Header.css';

const Header = () => {
 return (
   <header>
     <div className="sections">
       <a href="/ongoing">Онгоинги</a>
       <a href="/latest">Новые серии</a>
       <a href="/anons">Анонсы</a>
       <a href="/finished">Завершенные</a>
       <div className="dropdown">
         <a href="#">Категории <i className="fa fa-angle-down"></i></a>
         <ul className="category">
           <li><a href="/popular">Популярное</a></li>
           <li><a href="/timesheet">Расписание</a></li>
           <li><a href="/collections">Коллекции</a></li>
           <li><a href="/release/random">Случайное аниме</a></li>
         </ul>
       </div>
     </div>
   </header>
 );
}

export default Header;
