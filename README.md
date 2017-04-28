# npm-ftp

## Install
  * Copy the env.json file
  
  ```cp env.json.example env.json```
  
  * Install dependencies
  
  ```npm i```

## Usage

   * Fill the credentials and config on ```env.json```

  ```
{
	"FTP_SERVER": "ftp.yourdomain.com",
	"FTP_USER": "user",
	"FTP_PASS": "password",
	"SYNC_LOCAL_FOLDER": "src/**",
	"SYNC_REMOTE_FOLDER": "/"
}

  ```

  * Run the command

  ```gulp deploy```

  * itworks.md should appear on remote folder under ```/src/```
