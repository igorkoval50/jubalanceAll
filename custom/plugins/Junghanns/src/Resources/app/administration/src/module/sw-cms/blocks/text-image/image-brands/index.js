import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'image-brands',
    label: 'sw-cms.blocks.imageText.brands.label',
    category: 'text-image',
    component: 'sw-cms-block-image-brands',
    previewComponent: 'sw-cms-preview-image-brands',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed'
    },
    slots: {
        right: {
            type: 'text',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: `
                                <h2>Unsere Marken</h2>
                        `.trim()
                    }
                }
            }
        }
    }
});
