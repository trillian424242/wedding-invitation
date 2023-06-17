const { kakao } = window;

function renderMap() {
  var lon=127.106;
  var lat=37.51575;

  var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
      mapOption = { 
          center: new kakao.maps.LatLng(lat, lon), // 지도의 중심좌표
          level: 3 // 지도의 확대 레벨
      };

  var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
  var markerPosition  = new kakao.maps.LatLng(lat, lon); 

  var marker = new kakao.maps.Marker({
      position: markerPosition
  });

  marker.setMap(map);
}

export default renderMap;

