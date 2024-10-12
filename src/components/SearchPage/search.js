import React,{useState, useEffect} from "react";
import { useLocation } from "react-router-dom";

const useQuery=()=>{
    return new URLSearchParams(useLocation().search)
}

const SearchPage=()=>{

    const query=useQuery();
    const [searchValue, setSearchValue]=useState('');
    
    useEffect(()=>{
        const search=query.get('search');
        if(search){
            setSearchValue(search);
        }
    },[query]);

    const handleInputChange=(e)=>{
        setSearchValue(e.target.value);
    };

    return(
        <div className="position-relative d-flex flex-column w-100 min-vh-100 " style={{background: 'rgb(21,17,34)', background: 'linear-gradient(94deg, rgba(21,17,34,1) 0%, rgba(45,12,55,1) 24%, rgba(28,20,77,1) 64%, rgba(14,7,24,1) 100%)', overflowX: 'hidden', fontFamily: "'Be Vietnam Pro', 'Noto Sans', sans-serif"}}>
            <div className="container-fluid d-flex justify-content-center h-100">
                
                <label className="d-flex flex-column bajar_barra_busqueda" style={{minWidth: '10rem', height: '3.5rem', width: '75%', maxWidth: '800px'}}>
                    <div id="label_home" className="d-flex w-100 h-100 rounded">
                        <div className="d-flex align-items-center justify-content-center" 
                        style={{color: '#9393c8', borderColor: '#343465', backgroundColor: '#1a1a32', paddingLeft: '15px', borderTopLeftRadius: '0.75rem', borderBottomLeftRadius: '0.75rem', borderRight: 'none'}}
                        data-icon="MagnifyingGlass" data-size="20px" data-weight="regular">
                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" viewBox="0 0 256 256">
                                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z">                                                
                                </path>
                            </svg>
                        </div>
                        <input type="search" placeholder="Search for a game" className="border-0 text-white custom-input" style={{backgroundColor: '#1a1a32', color: '#9393c8', borderRadius: 0, width: '100%', minWidth: '10rem'}} aria-label="Search for a game" value={searchValue} onChange={handleInputChange}/>
                        <div className="d-flex align-items-center justify-content-center border-0 pe-1" style={{backgroundColor: '#1a1a32', borderTopRightRadius: '0.75rem', borderBottomRightRadius: '0.75rem'}}>
                            <button id="btn-search" type="button" className="d-flex align-items-center justify-content-center fw-bold text-white" style={{borderRadius: '0.5rem', height: '2.5rem', paddingLeft: '1rem', paddingRight: '1rem', minWidth: '6rem', maxWidth: '480px', cursor: 'pointer', overflow: 'hidden'}}>
                                <span className="text-truncate">Search</span>
                            </button>
                        </div>
                    </div>
                </label>
    
            </div>
        </div>
    )
}
export default SearchPage;