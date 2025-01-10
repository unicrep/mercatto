$(document).ready(function () {
    // Reducir tamaño del navbar al hacer scroll
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 10) {
            $(".navbar").addClass("shrink");
        } else {
            $(".navbar").removeClass("shrink");
        }
    });

    const text = "MERCATTO";
    const dynamicLetter = $("#dynamic-letter");

    // Inicializamos el texto como letras individuales
    dynamicLetter.html(text.split('').map(letter => `<span>${letter}</span>`).join(''));

    // Animación con GSAP para mostrar letras al hacer scroll
    $(window).on("scroll", function () {
        const elementTop = dynamicLetter.offset().top;
        const elementBottom = elementTop + dynamicLetter.height();
        const viewportTop = $(window).scrollTop();
        const viewportBottom = viewportTop + $(window).height();

        if (elementBottom > viewportTop && elementTop < viewportBottom) {
            gsap.fromTo(
                "#dynamic-letter span",
                { opacity: 0, y: 20 }, // Estado inicial
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.1, // Retraso entre cada letra
                    ease: "power2.out"
                }
            );
        }
    });

    // Animación del fondo en función del movimiento del ratón con mayor rango
    const background = $("#background-dynamic");
    $(document).on("mousemove", function (e) {
        const x = ((e.clientX / $(window).width()) - 0.5) * 50; // Incrementamos el rango a 50px
        const y = ((e.clientY / $(window).height()) - 0.5) * 50; // Incrementamos el rango a 50px
        background.css("transform", `translate(${x}px, ${y}px)`);
    });

    // Disparo inicial por si ya está visible
    $(window).trigger("scroll");
});

$(document).ready(function () {
    const glyphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿΩ";
    const container = $(".glyph-container");
    const largeGlyph = $("#largeGlyph");

    // Rellenar los glifos
    for (let glyph of glyphs) {
        container.append(`<div class='glyph-item'>${glyph}</div>`);
    }

    // Cambiar el glifo grande al hacer clic y aplicar animación GSAP
    $(".glyph-item").on("click", function () {
        const selectedGlyph = $(this).text();
        largeGlyph.val(selectedGlyph);

        // GSAP animación para el glifo clicado
        gsap.fromTo(
            this,
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }
        );
    });

    // Cambiar peso de fuente
    $(".font-weight-buttons a").on("click", function (e) {
        e.preventDefault();
        const weight = $(this).data("weight");
        $("#glyph-section .glyph-container, #glyph-section .large-view")
            .css("font-weight", weight);
    });

    // Cambiar Tipografía (opcional, si usas el selector)
    $("#font-select").on("change", function () {
        const selectedFont = $(this).val();
        $("#glyph-section").css("font-family", selectedFont);
    });
});

$(document).ready(function() {
    $('.letter-container').hover(
        function() {
            $(this).css('background-color', '#222').css('transform', 'scale(1.2)');
        },
        function() {
            $(this).css('background-color', '').css('transform', 'scale(1)');
        }
    );
});

$(document).ready(function () {
    console.log("jQuery cargado correctamente.");

    // Evitar crecimiento visual al pasar el ratón
    $('.letter-container').on('mouseenter', function () {
        $(this).css({
            borderWidth: '3px', // Mantiene el borde fijo
            boxShadow: '0 0 15px rgba(255, 212, 1, 0.5)', // Resplandor fijo
        });
    });

    $('.letter-container').on('mouseleave', function () {
        $(this).css({
            borderWidth: '3px',
            boxShadow: 'none', // Elimina el resplandor al salir
        });
    });

    // Animaciones personalizadas sin cambio de tamaño
    $('.anchor-effect').on('mouseenter', function () {
        $(this).find('span').css({
            textShadow: '0 0 10px #FFD401, 0 0 20px #FFD401',
        });
    });

    $('.three-d-effect').on('mouseenter', function () {
        $(this).find('span').css({
            transform: 'perspective(500px) rotateY(15deg)',
            textShadow: '3px 3px 10px rgba(255, 212, 1, 0.7)',
        });
    });

    $('.custom-effect-1').on('mouseenter', function () {
        $(this).find('span').css({
            background: 'linear-gradient(90deg, #FFD401, #47277A)',
            '-webkit-background-clip': 'text',
            color: 'transparent',
        });
    });

    $('.custom-effect-2').on('mouseenter', function () {
        $(this).find('span').css({
            textShadow: '0 0 15px #FFD401, 0 0 30px #FFD401',
        });
    });

    // Restablecer al salir
    $('.letter-container').on('mouseleave', function () {
        $(this).find('span').removeAttr('style');
    });
});

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

$(document).ready(function () {
    // Mostrar el modal al hacer clic en .hover-child
    $('.hover-child').on('click', function () {
        $('#confirmationModal').fadeIn();
    });

    // Cerrar el modal al hacer clic en la X
    $('.close').on('click', function () {
        $('#confirmationModal').fadeOut();
    });

    // Cerrar el modal si se hace clic fuera del contenido
    $(window).on('click', function (event) {
        if ($(event.target).is('#confirmationModal')) {
            $('#confirmationModal').fadeOut();
        }
    });
});

$(document).ready(function () {
    // Función para comprobar el tamaño de la pantalla y habilitar/deshabilitar el efecto
    function applyMouseEffect() {
        if ($(window).width() >= 768) {
            // Activar el efecto
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

                    $(this).css(
                        'transform',
                        `translateY(${mouseY < lineY ? -moveDistance : moveDistance}px)`
                    );
                });
            });
        } else {
            // Desactivar el efecto eliminando el evento mousemove
            $(document).off('mousemove');
            $('.line').css('transform', ''); // Resetea cualquier transformación aplicada
        }
    }

    // Ejecutar la función inicialmente
    applyMouseEffect();

    // Volver a verificar cuando se redimensione la ventana
    $(window).resize(function () {
        applyMouseEffect();
    });
});
