import { ChainablePromiseArray, ChainablePromiseElement, ElementArray } from "webdriverio";
import report from '@wdio/allure-reporter'


export const addLog = (log:string) => {
    report.addStep(`STEP: ${log}`)
    console.log(`STEP: ${log}`)
}

