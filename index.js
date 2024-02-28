const express = require('express');
const path = require('path');
const cors = require('cors')


const app = express();

const port = 8080;
app.use(cors())
app.get('/', (req, res) => {
    const string = `/* Header */

    .sktt {
        display: flex;
        align-items: center;
        padding: 0 2rem;
        background-color: gainsboro;
        gap: 1rem;
    }
    
    .sktt .title {
        font-size: 4rem;
        font-weight: bold;
    }
    
    .sktt .subtitle {
        font-size: 2rem;
        font-weight: bold;
    }
    
    .sktt .spacer {
        width: .25rem;
        height: 4rem;
        background-color: black;
    }
    
    .sktt img {
        width: 5rem;
    }
    
    /* Step titles */
    
    .stepTitle_skc {
        margin-top: 4rem;
        border: 2px solid #09a;
        border-radius: 2rem;
        flex-direction: row;
        overflow: hidden;
        display: flex;
        font-weight: bold;
        align-items: center;
    }
    
    .stepTitle_skc::before {
        width: 5rem;
        color: white;
        margin-right: 1rem;
        padding: .5rem 1rem;
        background-color: #09a;
    }
    
    div.skfc.skcn.skfdc.skfas.skfmd.skfcn>div.skflx.skfc.skfdr.skfas.skcp>div>div>div:nth-child(1)>div.skccon.skfdr>div.skffb.skflx.stepTitle_skffb>label::before,
    div.skflx.skfc.skfdr.skfas.skcp>div>div>div>div.skctr.skfdc.stepTitle_skctr>div.skccon.skfdr>div.skffb.skflx.stepTitle_skffb>label::before {
        content: "PASO 1";
        align-self: stretch;
    }
    
    div.skfc.skcn.skfdc.skfas.skfmd.skfcn>div.skflx.skfc.skfdr.skfas.skcp>div>div>div:nth-child(3)>div.skccon.skfdr>div.skffb.skflx.stepTitle_skffb>label::before,
    div.skfc.skcn.skfdc.skfas.skfmd.skfcn>div.skflx.skfc.skfdr.skfas.skcp>div>div>div:nth-child(3)>div.skccon.skfdr>div.skffb.skflx.stepTitle_skffb>label {
        content: "PASO 2";
        align-self: stretch;
    }
    
    div.skfc.skcn.skfdc.skfas.skfmd.skfcn>div.skflx.skfc.skfdr.skfas.skcp>div>div>div:nth-child(5)>div.skccon.skfdr>div.skffb.skflx.stepTitle_skffb>label::before {
        content: "PASO 3";
        align-self: stretch;
    }
    
    div.skfc.skcn.skfdc.skfas.skfmd.skfcn>div.skflx.skfc.skfdr.skfas.skcp>div>div>div:nth-child(7)>div.skccon.skfdr>div.skffb.skflx.stepTitle_skffb>label::before {
        content: "PASO 4";
        align-self: stretch;
    }
    
    div.skfc.skcn.skfdc.skfas.skfmd.skfcn>div.skflx.skfc.skfdr.skfas.skcp>div>div>div:nth-child(9)>div.skccon.skfdr>div.skffb.skflx.stepTitle_skffb>label::before {
        content: "PASO 5";
        align-self: stretch;
    }
    
    /* Text inputs */
    
    
    .textInputStyle1_skctr .skccon {
        border: 1px solid black;
        overflow: hidden;
    }
    
    .textInputStyle1_skfl {
        width: fit-content;
        background-color: rgb(60, 60, 60);
    }
    
    .textInputStyle1_skfli {
        color: white;
        font-weight: bold;
    }
    
    .textInputStyle1_skc {
        border: none;
        outline: none;
    }
    
    /* Panel paso 1 */
    
    .panelPaso1_skcb .skpcv {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(4, 1fr);
        grid-template-areas:
            "supervisor supervisor empresa empresa"
            "gerencia fecha hora_inicio hora_termino"
            "superintendencia superintendencia lugar lugar"
            "trabajo trabajo trabajo trabajo";
    }
    
    /* No Editable Base Form */
    
    .noEditableBaseForm_skar {
        display: none;
    }
    
    div.skfc.skcn.skfdc.skfas.skfmd.skfcn>div.skflx.skfc.skfdr.skfas.skcp>div>div>div.skcn.skaui.panelPaso1_skcn>div:nth-child(1)>div.skcw.panelPaso1_skcw>div>div>div:nth-child(1),
    div.skflx.skfc.skfdr.skfas.skcp>div>div>div>div:nth-child(1) {
        grid-area: supervisor;
    }
    
    div.skfc.skcn.skfdc.skfas.skfmd.skfcn>div.skflx.skfc.skfdr.skfas.skcp>div>div>div.skcn.skaui.panelPaso1_skcn>div:nth-child(1)>div.skcw.panelPaso1_skcw>div>div>div:nth-child(2),
    div.skflx.skfc.skfdr.skfas.skcp>div>div>div>div:nth-child(2) {
        grid-area: empresa;
    }
    
    div.skfc.skcn.skfdc.skfas.skfmd.skfcn>div.skflx.skfc.skfdr.skfas.skcp>div>div>div.skcn.skaui.panelPaso1_skcn>div:nth-child(1)>div.skcw.panelPaso1_skcw>div>div>div:nth-child(3),
    div.skflx.skfc.skfdr.skfas.skcp>div>div>div>div:nth-child(3) {
        grid-area: gerencia;
    }
    
    div.skfc.skcn.skfdc.skfas.skfmd.skfcn>div.skflx.skfc.skfdr.skfas.skcp>div>div>div.skcn.skaui.panelPaso1_skcn>div:nth-child(1)>div.skcw.panelPaso1_skcw>div>div>div:nth-child(4),
    div.skflx.skfc.skfdr.skfas.skcp>div>div>div>div:nth-child(4) {
        grid-area: fecha;
    }
    
    div.skfc.skcn.skfdc.skfas.skfmd.skfcn>div.skflx.skfc.skfdr.skfas.skcp>div>div>div.skcn.skaui.panelPaso1_skcn>div:nth-child(1)>div.skcw.panelPaso1_skcw>div>div>div:nth-child(5),
    div.skflx.skfc.skfdr.skfas.skcp>div>div>div>div:nth-child(5) {
        grid-area: hora_termino;
    }
    
    div.skfc.skcn.skfdc.skfas.skfmd.skfcn>div.skflx.skfc.skfdr.skfas.skcp>div>div>div.skcn.skaui.panelPaso1_skcn>div:nth-child(1)>div.skcw.panelPaso1_skcw>div>div>div:nth-child(6),
    div.skflx.skfc.skfdr.skfas.skcp>div>div>div>div:nth-child(6) {
        grid-area: hora_inicio;
    }
    
    div.skfc.skcn.skfdc.skfas.skfmd.skfcn>div.skflx.skfc.skfdr.skfas.skcp>div>div>div.skcn.skaui.panelPaso1_skcn>div:nth-child(1)>div.skcw.panelPaso1_skcw>div>div>div:nth-child(7),
    div.skflx.skfc.skfdr.skfas.skcp>div>div>div>div:nth-child(7) {
        grid-area: superintendencia;
    }
    
    div.skfc.skcn.skfdc.skfas.skfmd.skfcn>div.skflx.skfc.skfdr.skfas.skcp>div>div>div.skcn.skaui.panelPaso1_skcn>div:nth-child(1)>div.skcw.panelPaso1_skcw>div>div>div:nth-child(8),
    div.skflx.skfc.skfdr.skfas.skcp>div>div>div>div:nth-child(8) {
        grid-area: lugar;
    }
    
    div.skfc.skcn.skfdc.skfas.skfmd.skfcn>div.skflx.skfc.skfdr.skfas.skcp>div>div>div.skcn.skaui.panelPaso1_skcn>div:nth-child(1)>div.skcw.panelPaso1_skcw>div>div>div:nth-child(9),
    div.skflx.skfc.skfdr.skfas.skcp>div>div>div>div:nth-child(9) {
        grid-area: trabajo;
    }
    
    .skpt {
        display: none;
    }
    
    
    /* Avisos de color de fondo azul */
    
    .blueBackground1_skctr,
    .blueBackground2_skctr {
        background-color: #09a;
    }
    
    .blueBackground1_skc,
    .blueBackground2_skc {
        color: white;
        text-align: center;
    }
    
    .blueBackground1_skctr,
    .blueBackground1_skctr * {
        padding-bottom: 0;
        min-height: 0;
    }
    
    .blueBackground2_skctr,
    .blueBackground2_skctr * {
        padding-top: 0;
        min-height: 0;
    }
    
    div.skfc.skcn.skfdc.skfas.skfmd.skfcn>div.skflx.skfc.skfdr.skfas.skcp>div>div>div:nth-child(4)>div:nth-child(1)>div.skcw>div>div>div.skctr.skfdc.blueBackground1_skctr>div.skccon.skfdr>div.skffb.skflx.blueBackground1_skffb>label {
        font-size: 1.5rem;
        font-weight: bold;
    }
    
    /* Paso 2 preguntas con radios */
    
    div.skfc.skcn.skfdc.skfas.skfmd.skfcn>div.skflx.skfc.skfdr.skfas.skcp>div>div>div:nth-child(4)>div:nth-child(1)>div.skcw>div>div {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        ;
        grid-template-areas:
            "questionTitle1 questionTitle1"
            "questionTitle2 questionTitle2"
            "step2supervisor step2trabajador"
            "questionTitle3 questionTitle3"
            "questionTitle4 questionTitle4"
            "tableSupervisor tableTrabajador"
            "grayBackground grayBackground"
        ;
    }
    
    div.skfc.skcn.skfdc.skfas.skfmd.skfcn>div.skflx.skfc.skfdr.skfas.skcp>div>div>div:nth-child(4)>div:nth-child(1)>div.skcw>div>div>div.skctr.skfdc.blueBackground1_skctr {
        grid-area: questionTitle1;
    }
    
    div.skfc.skcn.skfdc.skfas.skfmd.skfcn>div.skflx.skfc.skfdr.skfas.skcp>div>div>div:nth-child(4)>div:nth-child(1)>div.skcw>div>div>div.skctr.skfdc.blueBackground2_skctr {
        grid-area: questionTitle2;
    }
    
    div.skfc.skcn.skfdc.skfas.skfmd.skfcn>div.skflx.skfc.skfdr.skfas.skcp>div>div>div:nth-child(4)>div:nth-child(1)>div.skcw>div>div>div:nth-child(5) {
        grid-area: questionTitle3 !important;
    }
    
    div.skfc.skcn.skfdc.skfas.skfmd.skfcn>div.skflx.skfc.skfdr.skfas.skcp>div>div>div:nth-child(4)>div:nth-child(1)>div.skcw>div>div>div:nth-child(6) {
        grid-area: questionTitle4 !important;
    }
    
    div.skfc.skcn.skfdc.skfas.skfmd.skfcn>div.skflx.skfc.skfdr.skfas.skcp>div>div>div:nth-child(4)>div:nth-child(1)>div.skcw>div>div>div:nth-child(3) {
        grid-area: step2supervisor;
    }
    
    div.skfc.skcn.skfdc.skfas.skfmd.skfcn>div.skflx.skfc.skfdr.skfas.skcp>div>div>div:nth-child(4)>div:nth-child(1)>div.skcw>div>div>div:nth-child(4) {
        grid-area: step2trabajador;
    }
    
    div.skfc.skcn.skfdc.skfas.skfmd.skfcn>div.skflx.skfc.skfdr.skfas.skcp>div>div>div:nth-child(4)>div:nth-child(1)>div.skcw>div>div>div:nth-child(8) {
        grid-area: tableTrabajador;
    }
    
    div.skfc.skcn.skfdc.skfas.skfmd.skfcn>div.skflx.skfc.skfdr.skfas.skcp>div>div>div:nth-child(4)>div:nth-child(1)>div.skcw>div>div>div:nth-child(7) {
        grid-area: tableSupervisor;
    }
    
    .step2QuestionsTitle_skc {
        font-weight: bold;
        color: white;
    }
    
    div.skfc.skcn.skfdc.skfas.skfmd.skfcn>div.skflx.skfc.skfdr.skfas.skcp>div>div>div:nth-child(4)>div:nth-child(1)>div.skcw>div>div>div:nth-child(3)>div:nth-child(1)>div.skcw>div>div>div.skctr.skfdc.step2QuestionsTitle_skctr,
    #templateDiv_SCADABI_TESTING_Repo_9c092902_d8d3_44da_a697_2f18f708ded3_1>div.skflx.skfc.skfdr.skfas.skcp>div>div>div>div.skctr.skfdc.step2QuestionsTitle_skctr,
    div.skfc.skcn.skfdc.skfas.skfmd.skfcn>div.skflx.skfc.skfdr.skfas.skcp>div>div>div:nth-child(4)>div:nth-child(1)>div.skcw>div>div>div:nth-child(7)>div:nth-child(1)>div.skcw>div>div>div.skctr.skfdc.step2QuestionsTitle_skctr {
        background-color: #606060;
    }
    
    div.skfc.skcn.skfdc.skfas.skfmd.skfcn>div.skflx.skfc.skfdr.skfas.skcp>div>div>div:nth-child(4)>div:nth-child(1)>div.skcw>div>div>div:nth-child(4)>div:nth-child(1)>div.skcw>div>div>div.skctr.skfdc.step2QuestionsTitle_skctr,
    div.skfc.skcn.skfdc.skfas.skfmd.skfcn>div.skflx.skfc.skfdr.skfas.skcp>div>div>div:nth-child(4)>div:nth-child(1)>div.skcw>div>div>div:nth-child(8)>div:nth-child(1)>div.skcw>div>div>div.skctr.skfdc.step2QuestionsTitle_skctr {
        background-color: #4d6a94;
    }
    
    .paso2Input_skfl {
        width: 70% !important;
    }
    
    .paso2Input_skffb {
        width: 30% !important;
    }
    
    .skbt {
        display: none;
    }
    
    /* gray background label*/
    
    .grayBackground_skctr {
        background-color: #565656;
        font-size: 1.5rem;
        grid-area: grayBackground;
    }
    
    .grayBackground_skctr label {
        font-size: 1.5rem;
        text-align: center;
        font-weight: bold;
        color: white;
    }
    
    /* base form */
    
    .codelcoBaseForm_skcw {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    
    /* alert text */
    
    .alertText_skc {
        color: #ef745c;
        font-weight: bold;
        text-align: center;
        font-size: 1.5rem;
    }
    
    .skgvth {
        background-color: gainsboro;
    }
    
    /*** Phone/Tablet styles ***/
    @media screen and (max-width: 800px) {
        .panelPaso1_skcb .skpcv {
            display: block;
        }
    
        .codelcoBaseForm_skcb {
            margin-bottom: 2rem;
        }
    
        div.skflx.skfc.skfdr.skfas.skcp>div>div>div>div:nth-child(2)>div.skcfw.skfdc.skmvt>div.skbt {
            display: block;
        }
    
        /*muestra titulos de paneles*/
        .skpt {
            display: block;
        }
    
        /* muestra boton delete en mobile*/
        .codelcoBaseForm_skdr {
            display: flex !important;
        }
    
        /* esconde titulo paso 1 */
        div.skflx.skfc.skfdr.skfas.skcp>div>div>div>div.skctr.skfdc.stepTitle_skctr>div.skccon.skfdr>div.skffb.skflx.stepTitle_skffb>label {
            display: none;
        }
    }
    
    /* 1024px */
    @media screen and (max-width: 800px) {
        .sktt .title {
            font-size: 2.5rem;
            font-weight: bold;
        }
    
        .sktt .subtitle {
            font-size: 1.25rem;
            font-weight: bold;
        }
    
        .sktt .spacer {
            width: .25rem;
            height: 4rem;
            background-color: black;
        }
    
        .sktt img {
            width: 5rem;
        }
    }`
    const payload = btoa(encodeURIComponent(string));
    res.send(payload);
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});