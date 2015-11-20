package common;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

/**
 * Created by Juan_Rodriguez on 11/20/2015.
 */
public class ScreenShotTaker {


    private ScreenShotTaker(){

    }

    private static final ThreadLocal<Map<String, Object>> SCREEN_SHOTS = new ThreadLocal<Map<String, Object>>(){
        @Override
    protected Map<String, Object> initialValue(){
            return new HashMap<String, Object>();
        }
    };

    public static void add(String name, byte[] image){
        SCREEN_SHOTS.get().put(name, image.clone());
    }

    public static Map<String, Object> getScreenshotsForCurrentTest(){
        return SCREEN_SHOTS.get();
    }

    public static void tidyUpAfterTestRun(){
        SCREEN_SHOTS.remove();
    }
}
