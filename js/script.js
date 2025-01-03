$(document).ready(function () {
    // Reducir tamaño del navbar al hacer scroll
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 10) {
            $(".navbar").addClass("shrink");
        } else {
            $(".navbar").removeClass("shrink");
        }
    });

    const text = "Montserrat";
    const dynamicLetter = $("#dynamic-letter");

    // Inicializamos el texto como letras individuales
    dynamicLetter.html(text.split('').map(letter => `<span>${letter}</span>`).join(''));

    // Función para mostrar letras al hacer scroll y cambiar peso dinámico
    $(window).on("scroll", function () {
        const elementTop = dynamicLetter.offset().top;
        const elementBottom = elementTop + dynamicLetter.height();
        const viewportTop = $(window).scrollTop();
        const viewportBottom = viewportTop + $(window).height();
        const maxScroll = $(window).height(); // Usamos la altura de la ventana como referencia

        if (elementBottom > viewportTop && elementTop < viewportBottom) {
            // Animación letra a letra
            dynamicLetter.find('span').each(function (index) {
                $(this).addClass('visible').css('transition-delay', `${index * 0.05}s`);
            });

            // Cálculo del peso dinámico
            const scrollTop = $(window).scrollTop();
            const weightRange = [300, 800]; // Pesos de Montserrat (Light a Extra Bold)
            let calculatedWeight = weightRange[0] + ((weightRange[1] - weightRange[0]) * scrollTop) / maxScroll;

            // Limitar el peso al rango permitido
            calculatedWeight = Math.min(weightRange[1], Math.max(weightRange[0], calculatedWeight));

            // Aplicar el peso dinámico
            dynamicLetter.css({
                "font-variation-settings": `'wght' ${calculatedWeight}`
            });
        }
    });

    // Disparo inicial por si ya está visible
    $(window).trigger("scroll");
});


$(document).ready(function() {
    const glyphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿΩ";
    const container = $(".glyph-container");
    const largeGlyph = $("#largeGlyph");

    // Populate the glyph container with grid structure
    for (let glyph of glyphs) {
        container.append(`<div class='glyph-item'>${glyph}</div>`);
    }

    // Click event for displaying the glyph
    $(".glyph-item").on("click", function() {
        const selectedGlyph = $(this).text();
        largeGlyph.val(selectedGlyph);
    });

    // Change font weight on link click
    $(".font-weight-buttons a").on("click", function(e) {
        e.preventDefault();
        const weight = $(this).data("weight");
        $("#glyph-section .glyph-container, #glyph-section .large-view").css("font-weight", weight);
    });
});