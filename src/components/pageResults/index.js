import React from "react";

import './styles.css';


class PageResults extends React.Component {
  render() {
    let {
      origin,
      destiny,
      plan,
      time,
      valuePlanNormal,
      valuePlanPlus,
    } = this.props.params;

    return (
      <article className="page-results">
        <header>
          <div>
            <p style={{ fontSize: 10 , color:'red'}}>*Os minutos excedentes tem um acréscimo de 10% sobre a tarifa normal. </p>
            <p>
              Origem (DDD):
              <strong>{origin}</strong>
            </p>
            <p>
              Destino (DDD):
              <strong>{destiny}</strong>
            </p>
            <p>
              Plano FaleMais:
              <strong>{plan}</strong>
            </p>
            <p>
              Tempo:
              <strong>{time} minutos</strong>
            </p>
            <p>
              Valor com FaleMais:
              <strong> R$ {valuePlanPlus}</strong>
            </p>
            <p>
              Valor sem FaleMais:
              <strong> R$ {valuePlanNormal}</strong>
            </p>
          </div>
        </header>
      </article>
    );
  }
}

export default PageResults;
