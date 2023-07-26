
const noview= {

    port: function({input_id, append_id, file_type, max_kb_size}){
    if(input_id==undefined || append_id==undefined || file_type==undefined || max_kb_size==undefined){
      window.alert('Warning! Required object ({ input_id , append_id, file_type, max_kb_size })')
    } 
    
    
    else{
    
        $('#'+input_id).on('change', (event)=>{
    
        for (let index = 0; index < event.target.files.length; index++) {
            // console.log(event.target.files[index])  
        
          const filetype= event.target.files[index].type;
          const filename= event.target.files[index].name;
          const filesize= event.target.files[index].size/1000;
        const tmppath = URL.createObjectURL(event.target.files[index]);
        
    
    if(filesize <= max_kb_size){
      
    
          
    
      if( file_type=='image' && filetype=='image/jpeg' || filetype=='image/jpg' || filetype=='image/png' || filetype=='image/gif'){
        $('#'+append_id).append(`<img class="rounded" src="${tmppath}" width="200px" height="150px" alt="">`)
      
       } 
    
    
    
      
      else if( file_type=='audio' && filetype=='audio/mpeg'){
    
    $('#'+append_id).append(`<audio  controls src="${tmppath}"></audio>`)
    
    
    }
    
    
    
     else if( file_type=='video' && filetype=='video/mp4'){
        $('#'+append_id).append(`<video width="300px" height="auto" controls src="${tmppath}"></video>
    `)
      
       }
    
    
    
      else if(file_type=='pdf' && filetype=='application/pdf') {
    
    $('#'+append_id).append(`<p>goto visit for preview => <a target="_blank" href='${tmppath}'>${filename} </a></p>`)
    
    
    }
    
    
    else {
      $('#'+append_id).append(`
    <div class="alert alert-primary" style="width: max-content;" role="alert">
    <strong>Warning! file extention allow only ${file_type}</strong>
    </div>`)
    
    }
    
    
        }
    
    else {
      $('#'+append_id).append(`
      <div class="alert alert-primary " style="width: max-content;" role="alert">
      <strong>Warning! maximum file size should ${max_kb_size}kb ${file_type==filetype?'':'and allow only '+file_type}</strong>
      </div>`)
        }
          
      }
    
      })
    
      }
    
    
    }
    }
    
