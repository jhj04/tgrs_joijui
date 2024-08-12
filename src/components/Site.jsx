import React from 'react';
import badge from "../assets/img/badge.png";


const Site = () => {
  return (
    <section id="card">
        <div className="description">
            <h3 className="description_title">
                인증마크란?
            </h3>
            <div className="description_content">
                    딱걸렸어(TGRS)에서는 쇼핑몰 등 다양한 제휴 업체를 대상으로
                    해당 사이트의 전상품을 대상으로 소비자의 사기 피해 방지를 위한
                    상품 및 uri 등록 및 사기 물품 여부 판독 후 팝업 서비스를 제공합니다.
                    인증마크란 해당 업체와의 제휴를 통해
                    사용자들이 더 안심할 수 있는 거래 환경 조성에 일조하였다는 사실을 표기하기 위한 제도입니다.
                    <br></br><br></br>
                    인증 사이트 목록 보러 가기
            </div>
        </div>
        <div className="card_section">
            <div className="card-wrapper">
                <img className="card-image" src={badge} alt="a" />
                <div className="card-content">
                    <h3 className="card-title">업체 1</h3>
                    <p className="card-description">
                    딱걸렸어와 함께하는<br></br>
                    인증 사이트입니다.                        
                    </p>
                    <p className="card-term">2024 00 00 ~ </p>
                </div>
            </div>
            <div className="card-wrapper">
                <img className="card-image" src={badge} alt="a" />
                <div className="card-content">
                    <h3 className="card-title">업체 2</h3>
                    <div className="card-description">
                    딱걸렸어와 함께하는<br></br>
                    인증 사이트입니다.
                    </div>
                    <div className="card-term">2024 00 00 ~ </div>
                </div>
            </div>
        </div>
        <div className="card_section">
            <div className="card-wrapper">
                <img className="card-image" src={badge} alt="a" />
                <div className="card-content">
                    <h3 className="card-title">업체 3</h3>
                    <p className="card-description">
                    딱걸렸어와 함께하는<br></br>
                    인증 사이트입니다.                        
                    </p>
                    <p className="card-term">2024 00 00 ~ </p>
                </div>
            </div>
            <div className="card-wrapper">
                <img className="card-image" src={badge} alt="a" />
                <div className="card-content">
                    <h3 className="card-title">업체 4</h3>
                    <div className="card-description">
                        딱걸렸어와 함께하는<br></br>
                        인증 사이트입니다.
                    </div>
                    <div className="card-term">2024 00 00 ~ </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Site;
