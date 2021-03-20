import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'image-text-row-two-card',
    label: 'sw-cms.blocks.imageText.imageTextTwo.label',
    category: 'text-image',
    component: 'sw-cms-block-image-text-row-two-card',
    previewComponent: 'sw-cms-preview-image-text-row-two-card',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed'
    },
    slots: {
        'left-image': {
            type: 'image',
            default: {
                config: {
                    displayMode: { source: 'static', value: 'cover' }
                },
                data: {
                    media: {
                        url: '/administration/static/img/cms/preview_camera_large.jpg'
                    }
                }
            }
        },
        'left-text': {
            type: 'text',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: `
                    <div class="person-name">
                      <h3>Peter Junghanns</h3> 
                    <p>Position</p>
                    </div>
                    <div class="person-info">
                      <p><i><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="411 1421 14 14"><image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABPklEQVQ4T42RvUsDQRBH31xCGhWJjSiWYiViFxCEHFmiYCWovZ2lhBPRSlAwkmhjaaNtbMUg5nIgFmIjNv4LSgqrFBrMrlySiychH1Puvrcz81vJe6oArAGCQSPm3LHdbfqU5D1VBYZC3LtjlyYHET+A8TYo1KqV+MjBxnWtlyynnnowsBiGLK0TmVT5uY+YyhpkNwTVqZs5R7lvPcVcOZ0Q0U8haM+xS9m+O/pA3lMvwDxCzfqKTGSW7z4HEnNltSLCTRM2l47tbg4ktrr6/7neUMXs7yTd40A+85amtfzEq5Wx1yBtCS6z92o0GuURmG2eyZX1bWV0TG+BOUSw/FUwUjFCoS366ImXnIoQLbblBkisY2yD/if6QKvzRTB2t107xABsBXbUSLuzTFfx74F0wpL6KsiCgRlgGLj9BQB+aAs6gmotAAAAAElFTkSuQmCC" width="14" height="14" x="411" y="1421"/></svg></i>0 9901 - 90 30 4-102</p>
                      <p><i><svg width="14" height="10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="411 1447 14 10"><image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAKCAYAAACE2W/HAAAAzElEQVQoU52SQWoCQRBF32/NAbLORgjJSUSyFgUFhSw8jpALZBFQSCDiAbLRa6jMctY5gE7/0DgDA8lgsDa16Vf1qrr0snnqFJy+gAf+F4cW7Z7m2+4OPMF6B+4vsBnyGLTUfNM1kFmeyvoE7hrg3PJQ1iI1qMD0NgOegY8/4BwYAW+VVR0EsQ9FnMYQ1jU4DzH2YyssMI+VzS8wzRsKq4Q5Q3Kaqwmsq37bYZaqS/EVuG1SzQQTw6qmeCy1bsqcCwaG5Xk5137HtQfwA/6KX51JRr78AAAAAElFTkSuQmCC" width="14" height="10" x="411" y="1447"/></svg></i>peter.junghanns@junghannsgmbh.de</p>	
                    </div>
                        `.trim()
                    }
                }
            }
        },
        'center-image': {
            type: 'image',
            default: {
                config: {
                    displayMode: { source: 'static', value: 'cover' }
                },
                data: {
                    media: {
                        url: '/administration/static/img/cms/preview_plant_large.jpg'
                    }
                }
            }
        },
        'center-text': {
            type: 'text',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: `
                        <div class="person-name">
                          <h3>Peter Junghanns</h3> 
                        <p>Position</p>
                        </div>
                        <div class="person-info">
                          <p><i><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="411 1421 14 14"><image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABPklEQVQ4T42RvUsDQRBH31xCGhWJjSiWYiViFxCEHFmiYCWovZ2lhBPRSlAwkmhjaaNtbMUg5nIgFmIjNv4LSgqrFBrMrlySiychH1Puvrcz81vJe6oArAGCQSPm3LHdbfqU5D1VBYZC3LtjlyYHET+A8TYo1KqV+MjBxnWtlyynnnowsBiGLK0TmVT5uY+YyhpkNwTVqZs5R7lvPcVcOZ0Q0U8haM+xS9m+O/pA3lMvwDxCzfqKTGSW7z4HEnNltSLCTRM2l47tbg4ktrr6/7neUMXs7yTd40A+85amtfzEq5Wx1yBtCS6z92o0GuURmG2eyZX1bWV0TG+BOUSw/FUwUjFCoS366ImXnIoQLbblBkisY2yD/if6QKvzRTB2t107xABsBXbUSLuzTFfx74F0wpL6KsiCgRlgGLj9BQB+aAs6gmotAAAAAElFTkSuQmCC" width="14" height="14" x="411" y="1421"/></svg></i>0 9901 - 90 30 4-102</p>
                          <p><i><svg width="14" height="10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="411 1447 14 10"><image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAKCAYAAACE2W/HAAAAzElEQVQoU52SQWoCQRBF32/NAbLORgjJSUSyFgUFhSw8jpALZBFQSCDiAbLRa6jMctY5gE7/0DgDA8lgsDa16Vf1qrr0snnqFJy+gAf+F4cW7Z7m2+4OPMF6B+4vsBnyGLTUfNM1kFmeyvoE7hrg3PJQ1iI1qMD0NgOegY8/4BwYAW+VVR0EsQ9FnMYQ1jU4DzH2YyssMI+VzS8wzRsKq4Q5Q3Kaqwmsq37bYZaqS/EVuG1SzQQTw6qmeCy1bsqcCwaG5Xk5137HtQfwA/6KX51JRr78AAAAAElFTkSuQmCC" width="14" height="10" x="411" y="1447"/></svg></i>peter.junghanns@junghannsgmbh.de</p>	
                        </div>
                        `.trim()
                    }
                }
            }
        }
    }
});
