import React from "react";
import wand from "../assets/img/wand.png";
import click from "../assets/img/click.png";

const Intro = () => {
    return (
        <section id="intro">
            <div className="intro__inner">
                <div className="description-text-container">
                    <div className="intro__description-title">
                        <div className="intro__description">
                            <div>함께 만들어가는</div>
                            <div><strong>웹사이트 보안 솔루션</strong></div>
                        </div>
                        <div className="intro__title">딱걸렸어</div>
                    </div>
                    <div className="intro__text">
                        <div className="img">
                            <img src={wand} alt="마법지팡이" width="200" height="200" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="intro__inner">
                <div className="description-text-container">
                    <div className="intro__description-title">
                        <div className="intro__description">
                            <div>사기 위험 즉각적 대응</div>
                            <div><strong>실시간 데이터 반영</strong></div>
                        </div>
                        <div className="intro__title">버튼 클릭 하나로</div>
                    </div>
                    <div className="intro__text">
                        <div className="img">
                            <img src={click} alt="손가락" width="200" height="200" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;
