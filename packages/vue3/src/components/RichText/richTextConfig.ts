const defaultMoreText = ['fullscreen', 'bold', 'italic', 'underline', 'strikeThrough', 'textColor', 'backgroundColor', 'fontSize', 'paragraphFormat'];
const defaultMoreParagraph = ['align', 'formatOL', 'formatUL', 'outdent', 'indent'];
const defaultMoreMisc = ['undo', 'redo'];
const defaultMoreRich = ['insertTable', 'insertImage', 'insertVideo', 'emoticons', 'insertLink', 'specialCharacters', 'insertHR', 'codeView', 'clear'];

const richTextConfig = {
  key: '',
  attribution: false,
  fontSizeSelection: true,
  autofocus: false,
  charCounterCount: false,
  pastePlain: true,
  useClasses: false,
  linkInsertButtons: ['linkBack'],
  imageInsertButtons: ['imageBack', '|', 'imageUpload', 'imageByURL'],
  language: '',
  quickInsertEnabled: true,
  paragraphFormat: {
    N: 'Normal',
    H1: 'Heading 1',
    H2: 'Heading 2',
    H3: 'Heading 3',
    H4: 'Heading 4',
  },
  paragraphFormatSelection: true,
  toolbarSticky: false,
  toolbarButtons: ['fullscreen', 'bold', 'italic', 'underline', 'strikeThrough', 'textColor', 'backgroundColor', 'fontSize', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'undo', 'redo', 'insertTable', 'insertImage', 'insertVideo', 'emoticons', 'insertLink', 'specialCharacters', 'insertHR', 'codeView', 'clear'],
  toolbarButtonsMD: {
    moreText: {
      buttons: defaultMoreText,
      buttonsVisible: 5,

    },
    moreParagraph: {
      buttons: defaultMoreParagraph,
      buttonsVisible: 3,
    },
    moreMisc: {
      buttons: defaultMoreMisc,
      buttonsVisible: 3,

    },
    moreRich: {
      buttons: defaultMoreRich,
      buttonsVisible: 3,

    },
  },
  toolbarButtonsSM: {
    moreText: {
      buttons: defaultMoreText,
      buttonsVisible: 3,

    },
    moreParagraph: {
      buttons: defaultMoreParagraph,
      buttonsVisible: 2,
    },
    moreMisc: {
      buttons: defaultMoreMisc,
      buttonsVisible: 3,

    },
    moreRich: {

      buttons: defaultMoreRich,
      buttonsVisible: 3,

    },
  },
  toolbarButtonsXS: {
    moreText: {
      buttons: defaultMoreText,
      buttonsVisible: 2,

    },
    moreParagraph: {
      buttons: defaultMoreParagraph,
      buttonsVisible: 1,
    },
    moreMisc: {
      buttons: defaultMoreMisc,
      buttonsVisible: 1,

    },
    moreRich: {

      buttons: defaultMoreRich,
      buttonsVisible: 2,

    },
  },
};

export { richTextConfig };
