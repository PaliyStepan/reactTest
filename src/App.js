import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import IconClip from "./components/Icons/Clip";
import IconSuccess from "./Assets/Images/success.png";

function App() {
  return (
      <div className="App">
          <div className="App__grid">
            <Menu />
                <main className="main">
                    <div className="main__grid">
                        <Header/>
                        <div className="main__inner">
                            <form  className="form" encType="multipart/form-data">
                                <div className="main-item">
                                    <h1 className="main-item__title">
                                        Загрузите документацию
                                    </h1>
                                    <div className="main-item__grid">
                                        <div className="main-item__jumbotron">
                                            <div className="jumbotron">
                                                <h2>
                                                    Загрузите копию паспорта директора и учредителей компании:
                                                    основной разворот и регистрация.
                                                </h2>
                                                <div className="jumbotron__links">
                                                    <div className="jumbotron__row">
                                                        <div className="jumbotron__left">
                                                            <a href="/#">Иванов Иван Иванович</a>
                                                        </div>
                                                        <div className="jumbotron__right">
                                                           <label className="btn jumbotron__btn jumbotron__btn_trans">
                                                               <IconClip/>
                                                               <input type="file"/>
                                                               <span className="jumbotron__btn-text"> Разворот</span>
                                                           </label>

                                                           <label className="btn jumbotron__btn jumbotron__btn_trans">
                                                               <IconClip/>
                                                               <input type="file"/>
                                                               <span className="jumbotron__btn-text"> Разворот</span>
                                                           </label>
                                                        </div>
                                                    </div>
                                                    <div className="jumbotron__row">
                                                        <div className="jumbotron__left">
                                                            <span>
                                                                Константинопольский Константин Константинович
                                                            </span>
                                                        </div>
                                                        <div className="jumbotron__right">
                                                           <label className="btn jumbotron__btn">
                                                               <IconClip/>
                                                               <input type="file"/>
                                                               <span className="jumbotron__btn-text"> Разворот</span>
                                                           </label>

                                                           <label className="btn jumbotron__btn">
                                                               <IconClip/>
                                                               <input type="file"/>
                                                               <span className="jumbotron__btn-text"> Регистрация</span>
                                                           </label>
                                                        </div>
                                                    </div>
                                                    <div className="jumbotron__row">
                                                        <div className="jumbotron__left">
                                                            <span>Петров Петр Петрович</span>
                                                        </div>
                                                        <div className="jumbotron__right">
                                                           <label className="btn jumbotron__btn">
                                                               <IconClip/>
                                                               <input type="file"/>
                                                               <span className="jumbotron__btn-text"> Разворот</span>
                                                           </label>

                                                           <label className="btn jumbotron__btn">
                                                               <IconClip/>
                                                               <input type="file"/>
                                                               <span className="jumbotron__btn-text"> Регистрация</span>
                                                           </label>
                                                        </div>
                                                    </div>
                                                    <div className="jumbotron__row">
                                                        <div className="jumbotron__left">
                                                            <span>
                                                                Константинопольская Констанция Константиновна
                                                            </span>
                                                        </div>
                                                        <div className="jumbotron__right">
                                                           <label className="btn jumbotron__btn">
                                                               <IconClip/>
                                                               <input type="file"/>
                                                               <span className="jumbotron__btn-text"> Разворот</span>
                                                           </label>

                                                           <label className="btn jumbotron__btn">
                                                               <IconClip/>
                                                               <input type="file"/>
                                                               <span className="jumbotron__btn-text"> Регистрация</span>
                                                           </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="main-item__jumbotron main-item__jumbotron_second">
                                            <div className="jumbotron">
                                                <h2>
                                                    Загрузите банковские выписки за последние 24 месяца в формате .txt (1C)
                                                    по следующим счетам:
                                                </h2>
                                                <h3>
                                                    Загрузите выписки за период 06.06.2017 по 06.06.2020. Это позволит повысить вероятность одобрения.
                                                </h3>
                                                <div className="jumbotron__links">
                                                    <div className="jumbotron__row">
                                                        <div className="jumbotron__left">
                                                            <span>
                                                                40702810301500023683 (АО "ТИНЬКОФФ БАНК")
                                                            </span>
                                                        </div>
                                                        <div className="jumbotron__right">
                                                            <img src={IconSuccess} alt="success"/>
                                                           <label className="btn jumbotron__btn ">
                                                               <IconClip/>
                                                               <input type="file"/>
                                                               <span className="jumbotron__btn-text"> Прикрепить</span>
                                                           </label>
                                                        </div>
                                                    </div>
                                                    <div className="jumbotron__row">
                                                        <div className="jumbotron__left">
                                                            <span>
                                                                40702810301500023683 (МОСКОВСКИЙ ФИЛИАЛАО КБ "МОДУЛЬБАНК")
                                                            </span>
                                                        </div>
                                                        <div className="jumbotron__right">
                                                            <div className="iconAttention">!</div>
                                                           <label className="btn jumbotron__btn">
                                                               <IconClip/>
                                                               <input type="file"/>
                                                               <span className="jumbotron__btn-text"> Прикрепить</span>
                                                           </label>
                                                        </div>
                                                    </div>
                                                    <div className="jumbotron__row">
                                                        <div className="jumbotron__left">
                                                            <span>40702810301500023683 (Филиал "Бизнес" ПАО "Совкомбанк" (Москва))</span>
                                                        </div>
                                                        <div className="jumbotron__right">
                                                            <div className="iconAttention">!</div>
                                                           <label className="btn jumbotron__btn">
                                                               <IconClip/>
                                                               <input type="file"/>
                                                               <span className="jumbotron__btn-text"> Прикрепить</span>
                                                           </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="period">
                                       <div className="period-item">
                                           <div className="period-item__year">
                                               2020
                                           </div>
                                           <div className="period-item__months">
                                               <div className="period-item__month">
                                                   <p>Январь</p>
                                                   <div className="period-item__scale"></div>
                                               </div>
                                               <div className="period-item__month">
                                                   <p>Февраль</p>
                                                   <div className="period-item__scale"></div>
                                               </div>
                                               <div className="period-item__month">
                                                   <p>Март</p>
                                                   <div className="period-item__scale"></div>
                                               </div>
                                               <div className="period-item__month">
                                                   <p>Апрель</p>
                                                   <div className="period-item__scale"></div>
                                               </div>
                                               <div className="period-item__month">
                                                   <p>Май</p>
                                                   <div className="period-item__scale"></div>
                                               </div>
                                           </div>
                                       </div>
                                       <div className="period-item">
                                           <div className="period-item__year">
                                               2019
                                           </div>
                                           <div className="period-item__months">
                                               <div className="period-item__month">
                                                   <p>Январь</p>
                                                   <div className="period-item__scale"></div>
                                               </div>
                                               <div className="period-item__month">
                                                   <p>Февраль</p>
                                                   <div className="period-item__scale"></div>
                                               </div>
                                               <div className="period-item__month">
                                                   <p>Март</p>
                                                   <div className="period-item__scale"></div>
                                               </div>
                                               <div className="period-item__month">
                                                   <p>Апрель</p>
                                                   <div className="period-item__scale"></div>
                                               </div>
                                               <div className="period-item__month">
                                                   <p>Май</p>
                                                   <div className="period-item__scale"></div>
                                               </div>
                                               <div className="period-item__month">
                                                   <p>Июнь</p>
                                                   <div className="period-item__scale"></div>
                                               </div>
                                               <div className="period-item__month">
                                                   <p>Июль</p>
                                                   <div className="period-item__scale"></div>
                                               </div>
                                               <div className="period-item__month">
                                                   <p>Август</p>
                                                   <div className="period-item__scale"></div>
                                               </div>
                                               <div className="period-item__month">
                                                   <p>Сентябрь</p>
                                                   <div className="period-item__scale"></div>
                                               </div>
                                               <div className="period-item__month">
                                                   <p>Октябрь</p>
                                                   <div className="period-item__scale"></div>
                                               </div>
                                               <div className="period-item__month">
                                                   <p>Ноябрь</p>
                                                   <div className="period-item__scale"></div>
                                               </div>
                                               <div className="period-item__month">
                                                   <p>Декабрь</p>
                                                   <div className="period-item__scale"></div>
                                               </div>
                                           </div>
                                       </div>
                                       <div className="period-item period-item_red">
                                           <div className="period-item__year">
                                               2018
                                           </div>
                                           <div className="period-item__months">
                                               <div className="period-item__month">
                                                   <p>Январь</p>
                                                   <div className="period-item__scale"></div>
                                               </div>
                                               <div className="period-item__month">
                                                   <p>Февраль</p>
                                                   <div className="period-item__scale"></div>
                                               </div>
                                               <div className="period-item__month">
                                                   <p>Март</p>
                                                   <div className="period-item__scale"></div>
                                               </div>
                                               <div className="period-item__month">
                                                   <p>Апрель</p>
                                                   <div className="period-item__scale"></div>
                                               </div>
                                               <div className="period-item__month">
                                                   <p>Май</p>
                                                   <div className="period-item__scale"></div>
                                               </div>
                                               <div className="period-item__month">
                                                   <p>Июнь</p>
                                                   <div className="period-item__scale"></div>
                                               </div>
                                               <div className="period-item__month">
                                                   <p>Июль</p>
                                                   <div className="period-item__scale"></div>
                                               </div>
                                               <div className="period-item__month">
                                                   <p>Август</p>
                                                   <div className="period-item__scale"></div>
                                               </div>
                                               <div className="period-item__month">
                                                   <p>Сентябрь</p>
                                                   <div className="period-item__scale"></div>
                                               </div>
                                               <div className="period-item__month">
                                                   <p>Октябрь</p>
                                                   <div className="period-item__scale"></div>
                                               </div>
                                               <div className="period-item__month">
                                                   <p>Ноябрь</p>
                                                   <div className="period-item__scale"></div>
                                               </div>
                                               <div className="period-item__month">
                                                   <p>Декабрь</p>
                                                   <div className="period-item__scale"></div>
                                               </div>
                                           </div>
                                       </div>
                                    </div>
                                    <div className="main-item__btn">
                                        <button className="btn">Отправить на оценку</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <Footer />
                    </div>
            </main>
          </div>
    </div>
  );
}

export default App;
