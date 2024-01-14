const RichTextConfig = {
  autofocus: true,
  imageAllowedTypes: ['jpeg', 'jpg', 'png'],
  pastePlain: true,
  language: '',
  paragraphFormat: {
    N: 'Normal',
    H1: 'Heading 1',
    H2: 'Heading 2',
    H3: 'Heading 3',
    H4: 'Heading 4',
  },
  paragraphFormatSelection: true,
  toolbarButtons: {
    moreText: {
      buttons: ['fullscreen', '|', 'bold', 'italic', 'underline', 'strikeThrough', 'textColor', 'backgroundColor', '|', 'fontSize', 'paragraphFormat', 'align', 'formatOL', 'formatUL', '|', 'outdent', 'indent', '|', 'undo', 'redo', 'emoticons', 'insertLink', 'specialCharacters', 'insertHR', 'insertTable', 'insertImage', 'insertVideo', '|', 'codeView', '|', 'clear'],
      buttonsVisible: 27,

    },
  },
  toolbarButtonsMD: {
    moreText: {
      buttons: ['fullscreen', '|', 'bold', 'italic', 'underline', 'strikeThrough', 'textColor', 'backgroundColor', '|', 'fontSize', 'paragraphFormat'],
      buttonsVisible: 5,

    },
    moreParagraph: {
      buttons: ['align', 'formatOL', 'formatUL', '|', 'outdent', 'indent'],
      buttonsVisible: 3,
    },
    moreMisc: {
      buttons: ['|', 'undo', 'redo'],
      buttonsVisible: 3,

    },
    moreRich: {

      buttons: ['insertTable', 'insertImage', 'insertVideo', 'emoticons', 'insertLink', 'specialCharacters', 'insertHR', '|', 'codeView', '|', 'clear'],
      buttonsVisible: 3,

    },
  },
  toolbarButtonsSM: {
    moreText: {
      buttons: ['fullscreen', '|', 'bold', 'italic', 'underline', 'strikeThrough', 'textColor', 'backgroundColor', '|', 'fontSize', 'paragraphFormat'],
      buttonsVisible: 3,

    },
    moreParagraph: {
      buttons: ['align', 'formatOL', 'formatUL', '|', 'outdent', 'indent'],
      buttonsVisible: 2,
    },
    moreMisc: {
      buttons: ['|', 'undo', 'redo'],
      buttonsVisible: 3,

    },
    moreRich: {

      buttons: ['insertTable', 'insertImage', 'insertVideo', 'emoticons', 'insertLink', 'specialCharacters', 'insertHR', '|', 'codeView', '|', 'clear'],
      buttonsVisible: 3,

    },
  },
  toolbarButtonsXS: {
    moreText: {
      buttons: ['fullscreen', '|', 'bold', 'italic', 'underline', 'strikeThrough', 'textColor', 'backgroundColor', 'fontSize', 'paragraphFormat'],
      buttonsVisible: 2,

    },
    moreParagraph: {
      buttons: ['align', 'formatOL', 'formatUL', 'outdent', 'indent'],
      buttonsVisible: 1,
    },
    moreMisc: {
      buttons: ['undo', 'redo'],
      buttonsVisible: 1,

    },
    moreRich: {

      buttons: ['insertImage', 'insertVideo', 'emoticons', 'insertLink', 'specialCharacters', 'insertHR', 'insertTable', '|', 'codeView', '|', 'clear'],
      buttonsVisible: 2,

    },
  },
  events: {
    initialized() {
      console.log('initialized');
    },
  },

};

export { RichTextConfig };
