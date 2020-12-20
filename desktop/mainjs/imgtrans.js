$(function(){
    var $imgList = $('.artistImg>div'); // bgwrap div 안에 있는 div 자식들을 가져옴
            var nImgCount = $imgList.children().length; // 위에서 가져온 div 자식들의 개수
            var nDuration = 2300; // 이미지를 변경할 시간 (3000 = 3초)
            var bAuto = true; // 자동으로 변경할 지 여부
            var nIndex = 0; // 변경할 이미지의 Index

            if (bAuto == true) {
                setInterval(autoSlide, nDuration); // Javascript setInterval 함수 호출
            }
            function autoSlide() {
                /* 3초마다 이 함수에 들어오게 됨 */
                // % 연산은 나누기를 한 후 나머지 값을 가져오는 연산입니다.
                // nImgCount = 4
                /*
                	nIndex = 0
                	++nIndex = 1
                	(++nIndex % nImageCount) = (1 % 4 = 1)
                	$($imgList.get(0)).fadeOut(1000);	// 0 Index에 있는 이미지를 fadeOut
                	$($imgList.get(1)).fadeIn(1000);	// 1 Index에 있는 이미지를 fadeIn
                */
                /*
                	nIndex = 1
                	++nIndex = 2
                	(++nIndex % nImageCount) = (2 % 4 = 2)
                	$($imgList.get(1)).fadeOut(1000);	// 1 Index에 있는 이미지를 fadeOut
                	$($imgList.get(2)).fadeIn(1000);	// 2 Index에 있는 이미지를 fadeIn
                */
                var next = (++nIndex % nImgCount);
                $($imgList.get(next - 1)).fadeOut(1000);
                $($imgList.get(next)).fadeIn(1000);
            }
});            
