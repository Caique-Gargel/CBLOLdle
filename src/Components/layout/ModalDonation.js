import Input from "../Forms/Input";
import styles from "./ModalDonation.module.css"
import imgLoading from '../../Icons/Loading2.gif'
import { useState, useEffect } from "react";
import imgGSTV from '../../Icons/GSTV.gif'
import imgLoadingBar from '../../Icons/LoadingBar.gif'
function ModalDonation({ isOpen, setOpen }) {
    const [isLoading, setIsLoading] = useState(false);
    const [QrCode, setQrCode] = useState("");
    const [pixCopiaECola, setPixCopiaECola] = useState("");
    const [donation, setDonation] = useState([]);
    const [valor, setValor] = useState("");
    const [nome, setNome] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [pagamentoConfirmado, setPagamentoConfirmado] = useState(false);

    useEffect(() => {

        if (!pagamentoConfirmado && donation && donation.id) {
            const interval = setInterval(() => {
                fetch(`https://cbloldle-backend.vercel.app/donations/${donation.id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }).then(res => res.json())
                    .then(data => {
                       
                        if (data.pago) {
                            setPagamentoConfirmado(true);
                            clearInterval(interval); // Para o polling
                        }
                    });
            }, 5000); // A cada 7 segundos

            return () => clearInterval(interval); // Limpa ao desmontar
        }
    }, [donation, pagamentoConfirmado]);

    const handleBackgroundClick = (event) => {

        if (event.target.id === "background2") {
            setValor("")
            setOpen(false);
        }
    };
    if (isOpen) {

        window.scrollTo({ top: 0, behavior: 'smooth' })

        // State para armazenar o valor do input


        // Função para formatar o valor como moeda Real
        const formatarReal = (valor) => {
            let num = valor.replace(/\D/g, "");
            if (num.length === 0)
                return "";
            num = (parseInt(num, 10) / 100).toFixed(2);
            // Adiciona pontos nas casas de milhar
            let partes = num.split(".");
            partes[0] = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            return "R$ " + partes.join(",");
        };

        // Handler para o input de valor
        const handleValorChange = (e) => {
            let input = e.target.value;
            let num = input.replace(/\D/g, "");
            if (num.length === 0) {
                setValor("");
                return;
            }
            setValor(formatarReal(num))
            // Atualiza o estado com o valor formatado
        };
        // Handler para o input de nome e mensagem
        const handleNomeChange = (e) => {
            const entrada = e.target.value;
            setNome(entrada);

        }
        const handleMensagemChange = (e) => {
            const entrada = e.target.value;
            setMensagem(entrada);
        }

        function copyClick() {
            const textarea = document.querySelector('textarea[name="pixCopiaECola"]');
            if (textarea) {
                textarea.select();
                navigator.clipboard.writeText(textarea.value);
            }
        }
        function voltar() {
            setDonation([]);
            setIsLoading(false);
            setQrCode("");
            setPixCopiaECola("");
        }
        function submit() {
            const valorInput = valor.replace("R$ ", "").replace(".", "").replace(",", ".");
            if (nome.length < 1 || valorInput < 2) {
                if (valorInput < 2)
                    document.querySelector('input[name="valor"]').style.borderColor = "red";
                else
                    document.querySelector('input[name="valor"]').style.borderColor = "";

                if (nome.length < 1)
                    document.querySelector('input[name="nome"]').style.borderColor = "red";
                else
                    document.querySelector('input[name="nome"]').style.borderColor = "";


                return;
            }
            const valorFloat = parseFloat(valorInput);
            setIsLoading(true);
            fetch('https://cbloldle-backend.vercel.app/donations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    donator_name: nome,
                    value: valorFloat,
                    coment: mensagem
                })
            }).then(resp => resp.json())
                .then((data) => {
                    setQrCode(data.qrcode.imagemQrcode);
                    setPixCopiaECola(data.cob.pixCopiaECola);
                    setDonation(data.donation);


                    //window.location.reload();
                })
                .catch((err) => console.log(err));

        }

        // Handler para evitar letras
        const handleValorKeyDown = (e) => {
            // Permite apenas números, backspace, delete, setas e tab
            if (!((e.key >= "0" && e.key <= "9") || ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"].includes(e.key))) {
                e.preventDefault();
            }
        };


        function LoadPagamento() {
            setTimeout(() => window.location.reload(), 5500)
        }



        return (
            <div className={styles.background} id="background2" onClick={handleBackgroundClick}>
                <div className={styles.modal}>
                    <button className={styles.btn} onClick={() => setOpen(false)} >X</button>
                    <h1>APOIE O CBLOLDLE</h1>
                    <hr />
                    {!isLoading ? (
                        <div className={styles.formDonation}>
                            <div className={styles.containerInput}>
                                <label className={styles.topLabel} for="nome">Seu Nome ou Apelido</label>
                                <input type="text"
                                    name="nome"
                                    className={styles.inputName}
                                    placeholder="Seu Nome ou Apelido"
                                    value={nome}
                                    onChange={handleNomeChange}
                                    autocapitalize="off"
                                    autocomplete="off"
                                    autocorrect="off"
                                    spellcheck="false"
                                />
                            </div>
                            <div className={styles.containerInput}>

                                <label className={`${styles.topLabel} ${styles.valueLabel}`} htmlFor="valor">Valor</label>
                                <input
                                    type="text"
                                    placeholder="R$ 0,00"
                                    value={valor}
                                    onChange={handleValorChange}
                                    onKeyDown={handleValorKeyDown}
                                    inputMode="numeric"
                                    minLength={6}
                                    maxLength={12}
                                    name="valor"
                                    autocapitalize="off"
                                    autocomplete="off"
                                    autocorrect="off"
                                    spellcheck="false"
                                />

                                <label className={styles.bottomLabel} for="valor">Valor mínimo: R$ 2,00</label>
                            </div>
                            <div className={styles.containerInput}>
                                <label className={styles.topLabel} for="nome">Mensagem</label>
                                <textarea
                                    placeholder="Mensagem"
                                    rows={5}
                                    maxLength={280}
                                    value={mensagem}
                                    onChange={handleMensagemChange}
                                    name="mensagem"
                                />
                                <label className={styles.bottomLabel} for="valor">Máximo de 280 caracteres</label>
                            </div>


                            <button className={styles.confirmBtn} onClick={submit}>
                                CONTINUAR
                            </button>
                        </div>
                    ) : (
                        <>
                            {QrCode.length > 0 ? (
                                <>
                                    {!pagamentoConfirmado ? (
                                        <div className={styles.PixContainer}>
                                            <p>Esse QrCode expira em 1 hora</p>
                                            <img src={QrCode} alt="QR Code" className={styles.qrCode} />
                                            <div className={styles.copiaEColaContainer}>
                                                <p>Pix Copia e Cola</p>
                                                <textarea

                                                    rows={1}
                                                    maxLength={280}
                                                    value={pixCopiaECola}
                                                    readOnly
                                                    name="pixCopiaECola"
                                                />
                                                <button className={styles.copyBtn} onClick={copyClick}>
                                                    COPIAR CODIGO
                                                </button>

                                            </div>
                                            <button className={styles.voltarBtn} onClick={voltar}>
                                                &larr; VOLTAR
                                            </button>

                                        </div>
                                    ) : (
                                        <div className={styles.PixContainer}>
                                            <h1>Pagamento Confirmado</h1>
                                            <img src={imgGSTV} alt="Obrigado" onLoad={LoadPagamento} className={styles.imgGSTV} />
                                            <h2>Obrigado pela doação!</h2>


                                        </div>
                                    )

                                    }

                                </>
                            ) : (
                                <img src={imgLoading} alt="CARREGANDO" className={styles.imgLoading} />
                            )}


                        </>
                    )}


                </div>
            </div>
        )
    }
    else {
        return <></>
    }
}
export default ModalDonation