module.exports = {
  //
  graphql: {
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
      ckeditor: true,
      federation: true,
    },
  },

  // ckeditor: {
  //   enabled: true,
  //   config: {
  //     plugin: {

  //     },
  //     editor: {
  //       toolbar: {
  //         items: [
  //           'paragraph',
  //           'heading1',
  //           'heading2',
  //           '|',
  //           'bold',
  //           'italic',
  //           'fontColor',
  //           'fontBackgroundColor',
  //           'fontFamily',
  //           'underline',
  //           'fontSize',
  //           'removeFormat',
  //           '|',
  //           'bulletedList',
  //           'todoList',
  //           'numberedList',
  //           '|',
  //           'alignment',
  //           'outdent',
  //           'indent',
  //           'horizontalLine',
  //           '|',
  //           'StrapiMediaLib',
  //           'insertTable',
  //           'blockQuote',
  //           'mediaEmbed',
  //           'link',
  //           'highlight',
  //           '|',
  //           'htmlEmbed',
  //           'sourceEditing',
  //           'code',
  //           'codeBlock',
  //           '|',
  //           'subscript',
  //           'superscript',
  //           'strikethrough',
  //           'specialCharacters',
  //           '|',
  //           'heading',
  //           "fullScreen",
  //           'undo',
  //           'redo'
  //         ]
  //       },
  //       fontSize: {
  //         options: [
  //           9,
  //           11,
  //           13,
  //           'default',
  //           17,
  //           19,
  //           21,
  //           27,
  //           35,
  //         ],
  //         supportAllValues: false
  //       },
  //       fontFamily: {
  //         options: [
  //           'default',
  //           'Roboto, Roboto Black, Roboto Medium, Roboto Light, sans-serif',
  //         ],
  //         supportAllValues: true
  //       },
  //       fontColor: {
  //         columns: 5,
  //         documentColors: 10,
  //       },
  //       fontBackgroundColor: {
  //         columns: 5,
  //         documentColors: 10,
  //       },
  //       htmlSupport: {
  //         allow: [
  //           {
  //             name: 'img',
  //             attributes: {
  //               sizes: true,
  //               loading: true,
  //             }
  //           },
  //         ]
  //       },
  //     }
  //   }
  // }

  ckeditor: {
    enabled: true,
    config: {
      plugin: {
        styles: `
            .ck-content{
              border-radius:4px !important;
            }
            .ck-sticky-panel{
              display:none !important;
            }

            .ck.ck-content h3.category {
                font-family: 'Bebas Neue';
                font-size: 20px;
                font-weight: bold;
                color: #d1d1d1;
                letter-spacing: 10px;
                margin: 0;
                padding: 0;
            }

            .ck.ck-content h2.document-title {
                font-family: 'Bebas Neue';
                font-size: 50px;
                font-weight: bold;
                margin: 0;
                padding: 0;
                border: 0;
            }

            .ck.ck-content h3.document-subtitle {
                font-size: 20px;
                color: #e91e63;
                margin: 0 0 1em;
                font-weight: normal;
                padding: 0;
            }

            .ck.ck-content p.info-box {
                --background-size: 30px;
                --background-color: #e91e63;
                padding: 1.2em 2em;
                border: 1px solid var(--background-color);
                background: linear-gradient(135deg, var(--background-color) 0%, var(--background-color) var(--background-size), transparent var(--background-size)), linear-gradient(135deg, transparent calc(100% - var(--background-size)), var(--background-color) calc(100% - var(--background-size)), var(--background-color));
                border-radius: 10px;
                margin: 1.5em 2em;
                box-shadow: 5px 5px 0 #ffe6ef;
            }

            .ck.ck-content blockquote.side-quote {
                font-family: 'Bebas Neue';
                font-style: normal;
                float: right;
                width: 35%;
                position: relative;
                border: 0;
                overflow: visible;
                z-index: 1;
                margin-left: 1em;
            }

            .ck.ck-content blockquote.side-quote::before {
                content: "“";
                position: absolute;
                top: -37px;
                left: -10px;
                display: block;
                font-size: 200px;
                color: #e7e7e7;
                z-index: -1;
                line-height: 1;
            }

            .ck.ck-content blockquote.side-quote p {
                font-size: 2em;
                line-height: 1;
            }

            .ck.ck-content blockquote.side-quote p:last-child:not(:first-child) {
                font-size: 1.3em;
                text-align: right;
                color: #555;
            }

            .ck.ck-content span.marker {
                background: yellow;
            }

            .ck.ck-content span.spoiler {
                background: #000;
                color: #000;
            }

            .ck.ck-content span.spoiler:hover {
                background: #000;
                color: #fff;
            }

            .ck.ck-content pre.fancy-code {
                border: 0;
                margin-left: 2em;
                margin-right: 2em;
                border-radius: 10px;
            }

            .ck.ck-content pre.fancy-code::before {
                content: "";
                display: block;
                height: 13px;
                background: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NCAxMyI+CiAgPGNpcmNsZSBjeD0iNi41IiBjeT0iNi41IiByPSI2LjUiIGZpbGw9IiNGMzZCNUMiLz4KICA8Y2lyY2xlIGN4PSIyNi41IiBjeT0iNi41IiByPSI2LjUiIGZpbGw9IiNGOUJFNEQiLz4KICA8Y2lyY2xlIGN4PSI0Ny41IiBjeT0iNi41IiByPSI2LjUiIGZpbGw9IiM1NkM0NTMiLz4KPC9zdmc+Cg==);
                margin-bottom: 8px;
                background-repeat: no-repeat;
            }

            .ck.ck-content pre.fancy-code-dark {
                background: #272822;
                color: #fff;
                box-shadow: 5px 5px 0 #0000001f;
            }

            .ck.ck-content pre.fancy-code-bright {
                background: #dddfe0;
                color: #000;
                box-shadow: 5px 5px 0 #b3b3b3;
            }

            `
      },
      editor: {
        toolbar: [
        ],
        // https://ckeditor.com/docs/ckeditor5/latest/features/toolbar/blocktoolbar.html
        blockToolbar: {
          items: [
            'heading', 'style',
            '|',
            'outdent',
            'indent',
            'horizontalLine',
            '|',
            'StrapiMediaLib',
            '-',
            'bulletedList', 'numberedList',
            '|',
            'insertTable', 'blockQuote',
            '|',
            'code',
          ],
        },
        balloonToolbar: [
          'bold',
          'italic',
          'fontColor',
          'FontBackgroundColor',
          'fontFamily',
          'fontSize',
          'alignment',
          '|',
          'removeFormat',
          'undo',
          'redo'
        ],
        // https://ckeditor.com/docs/ckeditor5/latest/features/style.html
        style: {
          definitions: [
            {
              name: 'Article category',
              element: 'h3',
              classes: ['category']
            },
            {
              name: 'Title',
              element: 'h2',
              classes: ['document-title']
            },
            {
              name: 'Subtitle',
              element: 'h3',
              classes: ['document-subtitle']
            },
            {
              name: 'Info box',
              element: 'p',
              classes: ['info-box']
            },
            {
              name: 'Side quote',
              element: 'blockquote',
              classes: ['side-quote']
            },
            {
              name: 'Marker',
              element: 'span',
              classes: ['marker']
            },
            {
              name: 'Spoiler',
              element: 'span',
              classes: ['spoiler']
            },
            {
              name: 'Code (dark)',
              element: 'pre',
              classes: ['fancy-code', 'fancy-code-dark']
            },
            {
              name: 'Code (bright)',
              element: 'pre',
              classes: ['fancy-code', 'fancy-code-bright']
            }
          ]
        },
        fontSize: {
          options: [
            9,
            11,
            13,
            'default',
            17,
            19,
            21,
            27,
            35,
          ],
          supportAllValues: false
        },
        fontFamily: {
          options: [
            'default',
            'Arial, Helvetica Neue, Helvetica, Source Sans Pro, sans-serif',
            'Courier New, Courier, monospace',
            'Georgia, serif',
            'Lucida Sans Unicode, Lucida Grande, sans-serif',
            'Tahoma, Geneva, sans-serif',
            'Times New Roman, Times, serif',
            'Trebuchet MS, Helvetica, sans-serif',
            'Verdana, Geneva, sans-serif',
            'Roboto, Roboto Black, Roboto Medium, Roboto Light, sans-serif',
          ],
          supportAllValues: true
        },
        fontColor: {
          columns: 5,
          documentColors: 10,
        },
        fontBackgroundColor: {
          columns: 5,
          documentColors: 10,
        },
        image: {
          resizeUnit: "%",
          resizeOptions: [{
            name: 'resizeImage:original',
            value: null,
            icon: 'original'
          },
          {
            name: 'resizeImage:25',
            value: '25',
            icon: 'small'
          },
          {
            name: 'resizeImage:50',
            value: '50',
            icon: 'medium'
          },
          {
            name: 'resizeImage:75',
            value: '75',
            icon: 'large'
          }],
          toolbar: [
            'toggleImageCaption',
            'imageTextAlternative',
            'imageStyle:inline',
            'imageStyle:block',
            'imageStyle:side',
            'linkImage',
            'resizeImage:25', 'resizeImage:50', 'resizeImage:75', 'resizeImage:original'
          ]
        },
        table: {
          contentToolbar: [
            'tableColumn',
            'tableRow',
            'mergeTableCells',
            'tableCellProperties',
            'tableProperties',
            'toggleTableCaption'
          ]
        },
        heading: {
          options: [
            { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
            { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
            { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
            { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
            { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
          ]
        },
        htmlSupport: {
          allow: [
            {
              name: 'img',
              attributes: {
                sizes: true,
                loading: true,
              }
            },
          ]
        },
      }
    }
  }
};
