import styles from "./Modal.module.css"

function Modal ({isOpen, setOpen})
{
   
    if(isOpen)
    {
        
        return(

            <div className={styles.background} >
                <div className={styles.modal}>
                    <button className={styles.btn} onClick={()=>setOpen(false)} >X</button>
                    <h1>Olá, Bem Vindo ao CBLOLdle </h1>
                    <hr/>
                    <p>Lorem ipsum curae aliquet ornare auctor enim, pulvinar justo massa nulla enim tempor, quis fringilla litora orci urna. sem ligula aliquam massa rutrum praesent phasellus venenatis tristique, porta nulla litora tortor nullam rutrum nulla eget porta, fermentum vehicula vitae justo dictumst suscipit hendrerit. adipiscing mauris lobortis elementum vitae ultricies magna integer scelerisque, taciti primis aptent quam cursus semper id, amet lacinia gravida tortor accumsan blandit id. mattis semper dapibus aenean netus eros ipsum auctor litora libero velit a tellus mattis curae, aptent pellentesque bibendum ligula sed dolor ultricies arcu phasellus consectetur consequat nostra curae.</p>
                
                    
                    <h1>Como Jogar ? </h1>
                    <hr/>
                    <p>Nulla mattis dapibus taciti potenti malesuada feugiat enim sagittis condimentum, est commodo nostra rhoncus class habitasse laoreet euismod viverra, hendrerit senectus bibendum justo scelerisque eleifend mattis fusce. taciti eleifend facilisis enim blandit ultrices luctus nisi volutpat nec blandit, purus lacinia eu est interdum sociosqu tristique dictumst eros accumsan amet, consectetur lacinia dui accumsan posuere congue fringilla rhoncus sit. felis sollicitudin ullamcorper nam gravida hac, conubia facilisis luctus varius felis tortor, habitant dui semper interdum. quam aliquam cras aliquam conubia malesuada magna litora, imperdiet dui vestibulum aliquam ultricies convallis, purus ullamcorper mi tristique nam aenean. </p>
                    
                    <h1>Propiedades </h1>
                    <hr/>
                    <p>Nulla mattis dapibus taciti potenti malesuada feugiat enim sagittis condimentum, est commodo nostra rhoncus class habitasse laoreet euismod viverra, hendrerit senectus bibendum justo scelerisque eleifend mattis fusce. taciti eleifend facilisis enim blandit ultrices luctus nisi volutpat nec blandit, purus lacinia eu est interdum sociosqu tristique dictumst eros accumsan amet, consectetur lacinia dui accumsan posuere congue fringilla rhoncus sit. felis sollicitudin ullamcorper nam gravida hac, conubia facilisis luctus varius felis tortor, habitant dui semper interdum. quam aliquam cras aliquam conubia malesuada magna litora, imperdiet dui vestibulum aliquam ultricies convallis, purus ullamcorper mi tristique nam aenean. </p>

                    <h1>Exemplo </h1>
                    <hr/>
                    <p>Nulla mattis dapibus taciti potenti malesuada feugiat enim sagittis condimentum, est commodo nostra rhoncus class habitasse laoreet euismod viverra, hendrerit senectus bibendum justo scelerisque eleifend mattis fusce. taciti eleifend facilisis enim blandit ultrices luctus nisi volutpat nec blandit, purus lacinia eu est interdum sociosqu tristique dictumst eros accumsan amet, consectetur lacinia dui accumsan posuere congue fringilla rhoncus sit. felis sollicitudin ullamcorper nam gravida hac, conubia facilisis luctus varius felis tortor, habitant dui semper interdum. quam aliquam cras aliquam conubia malesuada magna litora, imperdiet dui vestibulum aliquam ultricies convallis, purus ullamcorper mi tristique nam aenean. </p>

                </div>
                
            </div>
        )
    }
    else{
        return <></>
    }
    
}
export default Modal