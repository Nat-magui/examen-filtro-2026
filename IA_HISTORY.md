# IA_HISTORY.md — Registro de Uso de IA

**Alumno/a:** Tu nombre completo  
**Fecha:** 23/04/2026

---

## Prompt 1

### Momento del proceso

Cuando terminé de revisar el HTML original y necesitaba transformar la estructura con etiquetas semánticas y mejorar la accesibilidad básica.

### Lo que le pedí a la IA

Analizá este HTML original y ayudame a corregirlo usando etiquetas semánticas, alt en imágenes, labels en el formulario y botón real. También indicame qué estilos inline debería mover a style.css.

### Análisis del resultado obtenido

La IA propuso reemplazar los div principales por etiquetas como header, nav, main, section, article y footer. También sugirió agregar atributos alt a las imágenes y asociar los campos del formulario con labels usando for e id. El resultado me sirvió como guía porque me ordenó los cambios por prioridad y me ayudó a identificar qué partes eran estructurales y cuáles eran solo contenedores visuales.

### Qué debí corregir manualmente y por qué

Tuve que revisar manualmente algunas decisiones semánticas para no reemplazar elementos de más. Por ejemplo, mantuve algunos div internos que funcionaban solo como contenedores visuales y no como estructura principal. También revisé la lista de definición del personaje y la cambié a dl, dt y dd porque el original indicaba que esa información no debía quedar como divs sueltos.

---

## Prompt 2

### Momento del proceso

Cuando empecé a trabajar el CSS y necesitaba cumplir con Grid, Flexbox, contraste y eliminación de estilos inline.

### Lo que le pedí a la IA

Ayudame a corregir este style.css para usar grid-template-areas en el layout principal, Flexbox en la navegación y en las etiquetas de habilidades, mejorar el contraste y agregar foco visible para accesibilidad.

### Análisis del resultado obtenido

La IA propuso usar display grid en el body con áreas para header, main y footer. También reemplazó el uso de float en las tarjetas de estadísticas por CSS Grid, lo cual era uno de los requisitos del examen. Además, sugirió mejorar colores de texto que tenían bajo contraste y agregar estilos de focus para inputs, selects, botones y enlaces.

### Qué debí corregir manualmente y por qué

Tuve que revisar que todas las áreas declaradas en grid-template-areas tuvieran su grid-area correspondiente. Detecté que footer también necesitaba grid-area: footer para que el layout quedara completo. Además, limpié comentarios y líneas antiguas comentadas para que el CSS quedara más claro y no pareciera una mezcla entre código viejo y código corregido.

---

## Reflexión final

La IA fue útil para ordenar el trabajo y detectar errores de semántica, accesibilidad y CSS moderno. Sin embargo, tuve que revisar sus sugerencias porque algunas decisiones podían ser correctas técnicamente pero no necesariamente eran lo más adecuado para esta consigna. La próxima vez intentaría pedirle respuestas más específicas por archivo o por requisito, para poder controlar mejor cada cambio antes de implementarlo.