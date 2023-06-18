const { kakao } = window;

function renderMap() {
    var lon=127.106;
    var lat=37.51575;

    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
          center: new kakao.maps.LatLng(lat, lon), // 지도의 중심좌표
          level: 4 // 지도의 확대 레벨
    };

    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
    var markerPosition  = new kakao.maps.LatLng(lat, lon); 

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        position: markerPosition
    });
    // 인포윈도우로 장소에 대한 설명을 표시합니다
    var infowindow = new kakao.maps.InfoWindow({
        content: '<div style="width:150px;text-align:center;padding:6px;">더컨벤션 잠실점</div>'
    });
    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    infowindow.open(map, marker);
}

export default renderMap;

