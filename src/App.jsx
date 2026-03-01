import { useSelector, useDispatch } from "react-redux";
import { toggleTheme, resetSetting, setFontSize } from "./features/settingsSlice";
import { useEffect } from "react";

function App(){

    const {theme, fontSize} = useSelector((state) => state.settings)
    const dispatch = useDispatch()

    useEffect(() =>{
        document.body.className = theme
    }, [theme]);

    return(
        <div className={`app ${fontSize}`}>
            <h1>Theme Changer</h1>
            <p>Theme will change every time you click on toggle button</p>

            <button onClick={() => dispatch(toggleTheme())}>Theme Toggle</button>

            <button onClick={() => dispatch(setFontSize("small"))}>Small</button>
            <button onClick={() => dispatch(setFontSize("medium"))}>Medium</button>
            <button onClick={() => dispatch(setFontSize("large"))}>Large</button>

            <button onClick={() => dispatch(resetSetting())}>Reset</button>

        </div>
    )
}

export default App