import React from 'react';
import cardImg from './components/DataImg/1.jpeg';
import Cards from './components/Cards/Cards/Cards';
import Decomposition from './components/Decomposition/Decomposition';
import Collapse from './components/Collapse/Collapse';
import Paragraph from './components/Collapse/Paragraph';
import './App.css';


function App() {
  return (
    <div className={'wrapper'}>
      <header className={'header'} id={'header'}>
        <div className={'header__body _container'}>
          <h2 className={'header__title'}>5. Домашнее задание к лекции «Композиция компонентов»</h2>
        </div>
      </header>

      <main className={'main'}>
        <div className={'main__item task _container'} id={'task1'}>
          <header className={'task__header'}>
            <h3 className={'task__title'}>5.1 Карточки</h3>
            <nav className={'task__menu menu'}>
              <div className={'menu__item'}>
                <a className={'menu__link menu__link-bottom'} href={'#task2'}>
                  <span className={'_visually-hidden'}>next task</span>
                </a>
              </div>
            </nav>
          </header>
          <div className={'task__body'}>
            <Cards cardImg={ cardImg } />
          </div>
        </div>

        <div className={'main__item task _container'} id={'task2'}>
          <header className={'task__header'}>
            <h3 className={'task__title'}>5.2 Декомпозиция</h3>
            <nav className={'task__menu menu'}>
              <div className={'menu__item'}>
                <a className={'menu__link menu__link-top'} href={'#header'}>
                  <span className={'_visually-hidden'}>previous task</span>
                </a>
              </div>
              <div className={'menu__item'}>
                <a className={'menu__link menu__link-bottom'} href={'#task3'}>
                  <span className={'_visually-hidden'}>next task</span>
                </a>
              </div>
            </nav>
          </header>
          <div className={'task__body task__body_task2'}>
            <Decomposition />
          </div>
        </div>

        <div className={'main__item task _container'} id={'task3'}>
          <header className={'task__header'}>
            <h3 className={'task__title'}>5.3 Collapse*</h3>
            <nav className={'task__menu menu'}>
              <div className={'menu__item'}>
                <a className={'menu__link menu__link-top'} href={'#header'}>
                  <span className={'_visually-hidden'}>home task</span>
                </a>
              </div>
            </nav>
          </header>
          <div className={'task__body task__body_task3'}>
            <Collapse collapsedLabel='Подробнее'
                        expandedLabel='Скрыть'
                        isExpanded={false}
              >
                <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi ea eius eligendi
                  exercitationem minus mollitia perferendis quidem reprehenderit sint.
                </Paragraph>
              </Collapse>
            <Collapse collapsedLabel='Подробнее'
                    expandedLabel='Скрыть'
                    isExpanded={false}
             >
              <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, quae!
              </Paragraph>
          </Collapse>
          </div>
        </div>

      </main>
    </div>
  );
}

export default App;
