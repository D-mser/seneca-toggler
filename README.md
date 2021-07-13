# seneca-toggler

Assumptions:
- accomodates answers with both 2.* toggle positions in the answers (tested with 3 and 4 toggle positions)
- type checking provided with propTypes


Limitations:
- there can be only one source for questions data as DataContextProvider receives only one url
- order of the questions & answer positions is predefined
- supports only 3 states of theme changing (provided by useTheme custom hook)


Demo
![demo](https://github.com/D-mser/seneca-toggler/blob/main/public/toggle-demo.gif)
