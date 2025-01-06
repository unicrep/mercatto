


// Seccion variable 

$(document).ready(function() {
    const $weightSlider = $('#weightSlider');
    const $sizeSlider = $('#sizeSlider');
    const $letters = $('#variableText span');
    const $weightValue = $('#weightValue');
    const $sizeValue = $('#sizeValue');

    // Cambiar peso de la tipografía
    $weightSlider.on('input', function() {
      const weight = $(this).val();
      $letters.each(function() {
        $(this).css('font-variation-settings', `'wght' ${weight}`);
      });
      $weightValue.text(weight);
    });

    // Cambiar tamaño de la tipografía
    $sizeSlider.on('input', function() {
      const size = $(this).val();
      $letters.each(function() {
        $(this).css('font-size', `${size}px`);
      });
      $sizeValue.text(size);
    });

    // Cambiar la fuente
    $('#fontRoboto').on('click', function() {
      $letters.css('font-family', 'Roboto Flex, sans-serif');
    });

    $('#fontRecursive').on('click', function() {
      $letters.css('font-family', 'Recursive, sans-serif');
    });

    $('#fontInter').on('click', function() {
        $letters.css('font-family', 'Inter, sans-serif');
      });
  });


//   Seccion efecto letras Aa 

$(document).ready(function () {
    
    // Mousemove effect
    $(document).mousemove(function (e) {
      const mouseX = e.pageX;
      const mouseY = e.pageY;

      $('.line').each(function () {
        const offset = $(this).offset();
        const lineX = offset.left + $(this).width() / 2;
        const lineY = offset.top + $(this).height() / 2;

        const distance = Math.sqrt(
          Math.pow(mouseX - lineX, 2) + Math.pow(mouseY - lineY, 2)
        );

        const maxDistance = 150;
        const moveDistance = Math.max(0, maxDistance - distance) / 5;

        $(this).css('transform', `translateY(${mouseY < lineY ? -moveDistance : moveDistance}px)`);
      });
    });
  });