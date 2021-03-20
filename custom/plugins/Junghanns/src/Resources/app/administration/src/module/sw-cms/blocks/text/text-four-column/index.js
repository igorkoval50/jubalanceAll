import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'text-four-column',
    label: 'sw-cms.blocks.text.textFourColumn.label',
    category: 'text',
    component: 'sw-cms-block-text-four-column',
    previewComponent: 'sw-cms-preview-text-four-column',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed'
    },
    slots: {
        headline: {
            type: 'text',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: `
                        <h2>anschrift.</h2>
                        `.trim()
                    }
                }
            }
        },
        left: {
            type: 'text',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: `
                        <h3>junghanns GmbH</h3>
                        <div class="left-text">
                            <p> <i><svg xmlns="http://www.w3.org/2000/svg" 
                            xmlns:xlink="http://www.w3.org/1999/xlink" width="14" height="18" 
                            viewBox="706 1548 14 18">
                            <image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAASCAYAAABrXO8xAAABgklEQVQ4T4WTv0vWURTGP49ogz8GgwY3G5wSHN5JhZaGRBcJVAzRRXTpJXFxU2qqQRRsSVwqMCwQF8V3cJHSSVFwc+gPEA20FhVPnDhfub76xTvd+5znc+49954rkmFmj4Ai0AU8jtAvYBWYk3SU2ZVNzKwPWABq02TJ/A8wLGnJtf+gmfUDizlAufxS0leZWQNwCNSE4wL4CKzFuhMYBapi/RdocvAdMBHiJdAhaaOs9mfAOlAZ+nsH94CWEOYlefZbw8z8FCMR2HfwFKgLoVfS9xywB/gWsTMHj4GHIQxJ+pwDDgKfInbi4A+gPYSSpI4c0Gt8HrGfDr4GZhPzW+CNpKt4qgpgCphMPGMOVgMHSad43NelMPouzQnknfQka4BWYDO57rxe8Od6Kmk7bblxYPqe7hmXNOOeFPT5MtCdA68ALyTZDTAuoh7YBRrLYK+rIOl3pl/vmAlmVgC2gAehnQNtknbSZLfA2PmV/78wFiV9KD/+nWDAX/wOJA3cVfM/EOiDhycpn20AAAAASUVORK5CYII=" width="14" height="18" x="706" y="1548"/>
                            </svg></i> 
                            Donaustraße 20
                            </p>
                            <p>94491 Hengersberg</p>
                        </div>
                        `.trim()
                    }
                }
            }
        },
        center: {
            type: 'text',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: `
                        <h3>Hier erreichen Sie uns</h3>
                        <p class="phone"><i><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="995 1549 16 16"><image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABKElEQVQ4T43SMShFcRTH8e8vCilKWclgNVBKNoONXlkMSi+D0SQ2o10G06NMmCwGuyysSilGT0oWFnV0nkN/13Xf/y63/73nfP7nf85fZrYLrAKdfD3PQE3SRawrXzKzV6CvELUjaS0XeAIGC8FHkhZzgStgohB8J2k0F2gA9ZLgXklv7RDvwRJwWAg8lVRrl+z/HegHHoHuSHgAxiW9ZAEeZGZ7MUpfNiSt5CS3KghgBLiJKgyYlnSZg7SAQDaB7Vg2gSlJ9yliZj2S3tNvKdABnAGzCbLgN9LMBoB9YB64Ba4B3+TkB4gqvKHnwOR3YcABMAMMlxyp+QtIkOOkkspW/AEC8eOsA1vJeEuhUiBprE9nA1j+B/qoBBLIezMXvRgDhoAuv8GfyB9frXxaeckAAAAASUVORK5CYII=" width="16" height="16" x="995" y="1549"/></svg></i>
                        09901 / 90 30 40</p>
                        <p class="email"><i><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="12" viewBox="995 1577 16 12"><image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAMCAYAAABr5z2BAAAAy0lEQVQ4T6XSoUtDQRwH8M9LJlfWjGJf8C/YhguCxcWxLrJs28Js5jHMglGLYHBs+wsM9mG0mZaWTg7uwWP4eMq7dne/+3C/710WQmhghVP/G+/oZCGENa7wiuM/Gp84x30EAiIywgJHFcgXzjBDOwfimReMsUSzBPlGF7e4iDVFIM4fk/yGwz1ki1666SDf2wfi+hxPKZODVLhLPfdxXYTLgDu08JyKL/GBmyqg2MIUmwScYFLVwm8hPsScMExQaYi1nrH2R6r1lX8AOK1Ze95HFTcAAAAASUVORK5CYII=" width="16" height="12" x="995" y="1577"/></svg></i>
                        info@junghannsgmbh.de</p>
                        `.trim()
                    }
                }
            }
        },
        right: {
            type: 'text',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: `
                        <div class="right-two">
                            <p>Mo - Fr:  von 08:00-12:00 Uhr</p>
                            <p>und 13:00-17:00 Uhr</p>
                        </div>
                        <p>Sa - So: <span>Geschlossen</span></p>
                        `.trim()
                    }
                }
            }
        }
    }
});
