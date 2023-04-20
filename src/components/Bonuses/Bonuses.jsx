import React from 'react';
import classnames from "classnames";
import styles from "./styles.module.css";
import {QRCodeSVG} from 'qrcode.react';

function Bonuses() {
    return (
        <section className={classnames(styles.wrap)}>
            <article>
                <h4>+7 (903) 910-71-77</h4>
                <h2>{100} БОНУСОВ</h2>
                <h5>1 бонус равен 1 рублю. Бонусами можно оплатить до 30% от суммы чека в интернет-магазине и до 100% в магазинах сети.</h5>
                <div className={classnames(styles.info)}>
                    <span><h3>3%</h3><h5>Процент начисления за покупку</h5></span>
                    <span><h3>0Р</h3><h5>Сумма ваших покупок</h5></span>
                    <span><h3>100 000Р</h3><h5>Осталось до перехода на новый уровень</h5></span>
                </div>
            </article>
            <article>
                <QRCodeSVG value={crypto.randomUUID()} width="100%" height="100%"/>
            </article>
        </section>
    );
}

export default Bonuses;