const handlePressHotkey = (type, content) => {
  const {markdownEditor} = content;
  const cursor = markdownEditor.getCursor();
  const selection = markdownEditor.getSelection();
  const wrapChar = /windows|win32/i.test(navigator.userAgent) ? "\r\n" : "\n";
  switch (type) {
    case "Bold":
      markdownEditor.replaceSelection(`**${selection}**`, cursor);
      break;
    case "Del":
      markdownEditor.replaceSelection(`~~${selection}~~`, cursor);
      break;
    case "Italic":
      markdownEditor.replaceSelection(`*${selection}*`, cursor);
      break;
    case "Code":
      markdownEditor.replaceSelection(`${wrapChar}\`\`\`${wrapChar}${selection}${wrapChar}\`\`\`${wrapChar}`);
      break;
    case "InlineCode":
      markdownEditor.replaceSelection(`\`${selection}\``, cursor);
      break;
    case "H1":
      markdownEditor.replaceSelection(`# ${selection}`, cursor);
      break;
    case "H2":
      markdownEditor.replaceSelection(`## ${selection}`, cursor);
      break;
    case "H3":
      markdownEditor.replaceSelection(`### ${selection}`, cursor);
      break;
    default:
      return;
  }

  const editorContent = markdownEditor.getValue();
  content.setContent(editorContent);
};

const bindHotkeys = (content, dialog) =>
  // /macintosh|mac\sos\s+x/i.test(navigator.userAgent)
  /windows|win32/i.test(navigator.userAgent)
    ? {
        "Ctrl-B": () => {
          handlePressHotkey("Bold", content);
        },
        "Ctrl-U": () => {
          handlePressHotkey("Del", content);
        },
        "Ctrl-I": () => {
          handlePressHotkey("Italic", content);
        },
        "Ctrl-Alt-C": () => {
          handlePressHotkey("Code", content);
        },
        "Ctrl-Alt-F": () => {
          handlePressHotkey("InlineCode", content);
        },
        "Ctrl-Alt-1": () => {
          handlePressHotkey("H1", content);
        },
        "Ctrl-Alt-2": () => {
          handlePressHotkey("H2", content);
        },
        "Ctrl-Alt-3": () => {
          handlePressHotkey("H3", content);
        },
        "Ctrl-K": () => {
          dialog.setLinkOpen(true);
        },
        "Ctrl-Alt-I": () => {
          dialog.setImageOpen(true);
        },
        "Ctrl-Alt-T": () => {
          dialog.setFormOpen(true);
        },
      }
    : {
        "Cmd-B": () => {
          handlePressHotkey("Bold", content);
        },
        "Cmd-U": () => {
          handlePressHotkey("Del", content);
        },
        "Cmd-I": () => {
          handlePressHotkey("Italic", content);
        },
        "Cmd-Alt-C": () => {
          handlePressHotkey("Code", content);
        },
        "Cmd-Alt-F": () => {
          handlePressHotkey("InlineCode", content);
        },
        "Cmd-Alt-1": () => {
          handlePressHotkey("H1", content);
        },
        "Cmd-Alt-2": () => {
          handlePressHotkey("H2", content);
        },
        "Cmd-Alt-3": () => {
          handlePressHotkey("H3", content);
        },
        "Cmd-K": () => {
          dialog.setLinkOpen(true);
        },
        "Cmd-Alt-I": () => {
          dialog.setImageOpen(true);
        },
        "Cmd-Alt-T": () => {
          dialog.setFormOpen(true);
        },
      };

export default bindHotkeys;
