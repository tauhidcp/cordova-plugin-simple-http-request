package id.my.tauhidslab.httpreq;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.InputStream;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import android.os.Environment;

/**
 *
 * HTTPReq Class Implemented in HTTP Request Cordova Plugin to Handle Download Process  
 * Ahmad Tauhid (http://www.tauhidslab.my.id/)
 * https://github.com/tauhidcp/cordova-plugin-simple-http-request.git
 *
 */
 
public class HTTPReq extends CordovaPlugin {

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        
		if (action.equals("downloadFile")) {
            String url = args.getString(0);
            String destination = Environment.getExternalStorageDirectory().getAbsolutePath()+"/Download/"+args.getString(1);
            
			try{
				InputStream in = new URL(url).openStream();
				Files.copy(in, Paths.get(destination), StandardCopyOption.REPLACE_EXISTING);
				
				callbackContext.success("Downloaded!");
				
			} catch (Exception e){
				callbackContext.error(e.toString());
			}
			
            return true;
        }
		
        return false;
    }

}