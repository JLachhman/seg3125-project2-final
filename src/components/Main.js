import './Main.css';

const Main = () => {
    return(
        <main>
            <div className="main__container">

                <div className="main__title">
                    <div className="main__greeting">
                        <h1>Hello User</h1>
                        <p>Welcome to FitSmart</p>
                    </div>
                </div>

                <div className="main__cards">

                    <div className="card">
                        <i className="fas fa-hamburger fa-2x" aria-hidden="true"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Calories</p>
                            <span className="font-bold text-title">2475/3000</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fas fa-shoe-prints fa-2x" aria-hidden="true"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Steps</p>
                            <span className="font-bold text-title">8700/9000</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fas fa-lightbulb fa-2x" aria-hidden="true"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Tip</p>
                            <span className="font-bold text-title">Body = Brain</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fas fa-bullseye fa-2x" aria-hidden="true"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Daily Goal</p>
                            <span className="font-bold text-title">100 push-ups</span>
                        </div>
                    </div>

                    <div className="card_add">
                        <div className="card_inner">
                            <i className="far fa-plus-circle fa-2x text-green"></i>
                            <span className="font-bold text-title-add">Add Module</span>
                        </div>
                    </div>

                </div>

            </div>
        </main>
    );
};

export default Main;