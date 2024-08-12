import React from "react";
import alert from "../assets/img/alert_popup.png";
import main from "../assets/img/main_popup.png";
import register from "../assets/img/resister_popup.png";
import api from "../assets/img/API_img.png";
import ai from "../assets/img/bigdata.png";



const Function = () => {
    return ( 
        <section id="func">
            <div className="func_inner">
                <div className="func_desc">
                    <h3 className="func_title">사기 사이트 탐지 / 등록 팝업</h3>
                    <p className="func_content">
                        전자상거래가 활성화되며 그에 따라 만연해지는 관련 사기 범죄.<br></br>
                        하지만, 사기 범죄에 대한 대응은 "스스로 경각심을 가지고 조심한다." 가
                        가장 주된 대책입니다.<br></br>                        
                        따라서 저희 딱걸렸어(TGRS)는 사기 사이트 URI 데이터를 활용, 해당 사이트의 사기 여부를 판별 후
                        팝업을 통해 사용자에게 즉각적으로 사실을 알려 대응할 수 있도록 합니다.                           
                        또한, 한번의 피해로 사기 수사 및 대응이 어렵고, 다수 피해자의 발생으로 이어져 
                        수백, 수천만원대의 피해 확산 방지를 위해 사용자의 피해 URI등록 및 즉각적인 데이터베이스 추가 반영이 가능합니다.

                    </p>
                </div>
                <img className="imagefile" src={main} alt="a" width="150" height="225"/>
                <img className="imagefile" src={alert} alt="a" width="150" height="225"/>
                <img className="imagefile" src={register} alt="a" width="150" height="225"/>

            </div>
            <div className="func_inner">
            <img className="imagefile" src={ai} alt="a" width="500" height="500"/>
                <div className="func_desc">
                    <h3 className="func_title">AI 기술을 활용하여 빅데이터 활용 및 처리</h3>
                    <p className="func_content">
                        온라인 쇼핑몰 및 해당 쇼핑몰의 물품 수는 상당합니다. <br></br>
                        해당 제품마다 다른 URI를 가지고 있으며, 더구나 그 수는 계속해서 증가하고 있습니다.                         
                        따라서, 관련 정보를 저장 및 처리하기 위해 딱걸렸어(TGRS)는 AI기술을 활용하여
                        자동화 시스템을 구축할 예정입니다.                            
                        
                    </p>
                </div>
            </div>
            <div className="func_inner">
                <div className="func_desc">
                    <h3 className="func_title">기업 대상 사기 사이트 관련 API 제공</h3>
                    <p className="func_content">
                        온라인 오픈마켓 등의 기업을 대상으로 사기 사이트 관련 API를 제공할 예정입니다.
                        API 사용량을 기반으로 구독료를 책정할 계획이며, 해당 API를 활용하여 
                        기업 측에서는 선제적인 사기 방지 및 해당 사이트 물품에 대한 
                        사기 여부 판단 및 반영 자동화 시스템 구축이 가능합니다. <br></br><br></br>

                        <h3>딱걸렸어의(TGRS) 필요성?</h3>
                        오픈마켓 혹은 온라인 쇼핑몰의 경우 허위 매물, 사기 사이트와 관련된 범죄 행위에 연루될 경우
                        기업 차원에서의 신뢰도 저하 및 이미지 실추의 위험이 있으며, 해당 쇼핑몰에서의 구매로 인한 사기의 경우
                        쇼핑몰 자체의 과실이 아님에도 불구, 소비자의 해당 마켓 재방문 가능성은 떨어지게 될 것입니다.
                        따라서, 딱걸렸어(TGRS)는 소비자의 심리적 안정을 통한 마켓 신뢰도 증진 및 매출 하락 방지에 기여할 것입니다. 
                        <br></br><br></br>
                        딱걸렸어와 제휴하기
                    </p>
                </div>
                <img className="imagefile" src={api} alt="a" width="450" height="250"/>
            </div>
            <div className="func_inner">
            <img className="imagefile" src={ai} alt="a" width="500" height="500"/>
                <div className="func_desc">
                    <h3 className="func_title">무료 서비스 제공</h3>
                    <p className="func_content">
                        딱걸렸어(TGRS)는 민간 사용자를 대상으로는 서비스를 무료 제공합니다.
                        <br></br><br></br>
                        딱걸렸어 사용하러 가기

                                                   
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Function;

