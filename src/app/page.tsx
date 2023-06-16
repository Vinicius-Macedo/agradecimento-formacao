import { DefaultMarginSection } from "@/components/DefaultMarginSection";
import ItemWithIcon from "@/components/ItemWithIcon";
import SegredosItems from "@/components/SegredosItems";
import SquareWithNumbers from "@/components/SquareWithNumbers";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="pt-16 sm:pt-32 px-8 lg:mb-16">
        <div className="flex justify-center items-center flex-col gap-4 sm:gap-16">
          <div>
            <p className="text-center text-white title font-bold max-w-[650px]">
              SEU MATERIAL VAI CHEGAR NO SEU E-MAIL!
            </p>
            <p className="text-white text-center">
              Olhe também na sua caixa de Spam!
            </p>
          </div>

          <div className="flex gap-8 items-center">
            <Image
              src={"/arrow.svg"}
              alt={""}
              width={54}
              height={54}
              className="object-contain rotate-90"
            />
            <p className="md:bg-[#34D949] px-8 py-8 rounded-full text-white font-bold text-center text-[20px]">
              TEMOS PRESENTES QUE VOCÊ TAMBÉM VAI GOSTAR!
            </p>
            <Image
              src={"/arrow.svg"}
              alt={""}
              width={54}
              height={54}
              className="object-contain w-27 h-27 rotate-90"
            />
          </div>
        </div>
      </header>
      <main>
        <DefaultMarginSection
          className="lg:grid lg:grid-cols-2"
          hasNoEffect={true}
        >
          <Image
            src={"/fundo-capa.jpg"}
            alt={""}
            className="absolute left-0 top-0 w-full h-full object-cover -z-10"
            width={1366}
            height={640}
          />
          <Image
            src={"/financas-couch.png"}
            alt={""}
            width={444}
            height={651}
            className="hidden lg:block lg:h-auto lg:max-w-none lg:absolute lg:bottom-0 lg:-left-[30px] lg:w-[500px] xl:left-[120px] 3xl:left-[10vw]"
          />
          <div className="decoration-hidden"></div>
          <div className="flex flex-col gap-16 lg:gap-8 w-full justify-end items-center">
            <h2 className="title text-white text-center font-bold">
              POUCAS VAGAS LIBERADAS!
            </h2>
            <p className="semi-title text-center text-semiwhite">
              AGENDE AGORA SUA CONVERSA DE INVESTIMENTOS COM ESPECIALISTAS!
            </p>
            <div className="grid grid-cols-2 gap-4 items-center lg:flex w-full max-w-[500px]">
              <Image
                src={"/investimentos-retorno.png"}
                alt={""}
                width={165}
                height={125}
                className="object-contain w-full h-auto"
              />
              <div>
                <p className="text-white font-bold">
                  TENHA ACESSO AOS MELHORES INVESTIMENTOS PARA SEUS OBJETIVOS
                  AGORA!
                </p>
                <p className="text-[#34D949] font-bold">SEM CUSTOS!</p>
              </div>
            </div>
            <a
              href="https://api.whatsapp.com/send?phone=5511992332308&text=Ol%C3%A1!%20Vim%20pelo%20agendamento%20com%20especialista%20de%20investimento"
              target="_blank"
              className="flex gap-4 items-center bg-[#20AB4B] py-8 px-10 rounded-full w-full max-w-[350px] justify-center"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                version="1.1"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 object-contain"
              >
                <path
                  fill="#fff"
                  d="M13.641 2.325c-1.497-1.5-3.488-2.325-5.609-2.325-4.369 0-7.925 3.556-7.925 7.928 0 1.397 0.366 2.763 1.059 3.963l-1.125 4.109 4.203-1.103c1.159 0.631 2.463 0.966 3.787 0.966h0.003c0 0 0 0 0 0 4.369 0 7.928-3.556 7.928-7.928 0-2.119-0.825-4.109-2.322-5.609zM8.034 14.525v0c-1.184 0-2.344-0.319-3.356-0.919l-0.241-0.144-2.494 0.653 0.666-2.431-0.156-0.25c-0.663-1.047-1.009-2.259-1.009-3.506 0-3.634 2.956-6.591 6.594-6.591 1.759 0 3.416 0.688 4.659 1.931 1.244 1.247 1.928 2.9 1.928 4.662-0.003 3.637-2.959 6.594-6.591 6.594zM11.647 9.588c-0.197-0.1-1.172-0.578-1.353-0.644s-0.313-0.1-0.447 0.1c-0.131 0.197-0.512 0.644-0.628 0.778-0.116 0.131-0.231 0.15-0.428 0.050s-0.838-0.309-1.594-0.984c-0.588-0.525-0.987-1.175-1.103-1.372s-0.013-0.306 0.088-0.403c0.091-0.088 0.197-0.231 0.297-0.347s0.131-0.197 0.197-0.331c0.066-0.131 0.034-0.247-0.016-0.347s-0.447-1.075-0.609-1.472c-0.159-0.388-0.325-0.334-0.447-0.341-0.116-0.006-0.247-0.006-0.378-0.006s-0.347 0.050-0.528 0.247c-0.181 0.197-0.694 0.678-0.694 1.653s0.709 1.916 0.809 2.050c0.1 0.131 1.397 2.134 3.384 2.991 0.472 0.203 0.841 0.325 1.128 0.419 0.475 0.15 0.906 0.128 1.247 0.078 0.381-0.056 1.172-0.478 1.338-0.941s0.166-0.859 0.116-0.941c-0.047-0.088-0.178-0.137-0.378-0.238z"
                ></path>
              </svg>
              <span className="text-white font-bold">
                FALAR AGORA COM ESPECIALISTA!
              </span>
            </a>
            <div className="grid grid-cols-2 gap-4 items-center lg:flex w-full max-w-[500px]">
              <Image
                src={"/mobile-monitor-apps.png"}
                alt={""}
                width={200}
                height={100.26}
                className="object-contain w-full h-auto"
              />
              <p className="text-white font-bold text-[20px]">
                BÔNUS: TENHA ACESSO A RELATÓRIOS E INFORMAÇÕES DE MERCADO
              </p>
            </div>
          </div>
        </DefaultMarginSection>
        <section>
          <div
            className={
              "px-8 py-32 sm:px-16 md:py-32 xl:px-0 xl:w-[1110px] xl:m-auto flex flex-col-reverse items-center md:grid grid-cols-2 xl:flex xl:flex-row overflow-hidden xl:overflow-visible xl:pt-32"
            }
          >
            <div className="max-w-[665px] xl:w-[665px] flex flex-col gap-12 items-center lg:items-start">
              <div>
                <h2
                  className="text-white font-bold title"
                  style={{ lineHeight: "1" }}
                >
                  Formação de investidores
                </h2>
                <p className="text-white tracking-widest">
                  SEJA UM MULTI-INVESTIDOR
                </p>
              </div>
              <div className="flex flex-col gap-8">
                <p className="font-bold text-[#d9c034] text-[20px] uppercase">
                  Segredos revelados sobre:
                </p>
                <div className="grid sm:grid-cols-3 gap-8">
                  <SegredosItems title={"PRINCIPAIS FUNDAMENTOS"} />
                  <SegredosItems
                    title={"RENDA FIXA"}
                    description={"Títulos, CDBs, debêntures e mais"}
                  />
                  <SegredosItems title={"COMO INVESTIR"} />
                  <SegredosItems title={"MONTAGEM DE CARTEIRA"} />
                  <SegredosItems
                    title={"RENDA VARIÁVEL"}
                    description="Ações, fundos imobiliários, opções e mais"
                  />
                  <SegredosItems title={"INVESTIDOR COMPLETO"} />
                </div>
                <a
                  className="bg-[#d9c034] font-bold px-8 py-4 rounded text-[#000000] text-center sm:text-[22px] max-w-[401px]"
                  href="https://pay.hotmart.com/A78289712N?bid=1677160401379"
                  target="_blank"
                >
                  QUERO GARANTIR A MINHA VAGA
                </a>
              </div>
            </div>
            <figure className="relative flex justify-center xl:-mr-30">
              <div className="circle-decoration-active absolute w-[400px] h-[400px] z-[1] left-1/2 top-1/2 -translate-x-1/2 -translate-y-[50%] xl:w-[600px] xl:h-[600px]"></div>
              <picture>
                <source media="(max-width:500px)" srcSet="/hero-photo-p.webp" />
                <img
                  alt="Douglas Soave"
                  src="/hero-photo.webp"
                  width="300"
                  height="405"
                  decoding="sync"
                  data-nimg="1"
                  className="object-contain z-[2] w-[300px] xl:w-[520px]"
                  loading="eager"
                  style={{ color: "transparent" }}
                />
              </picture>
            </figure>
          </div>
        </section>
        <DefaultMarginSection className="flex flex-col items-center gap-8">
          <h2 className="text-[#d9c034] text-[20px] font-extrabold title text-center">
            CONDIÇÃO EXCLUSIVA
          </h2>
          <div className="flex justify-center items-start flex-wrap gap-4 lg:gap-32">
            <p className="text-white semi-title font-bold w-auto">
              <span className="title leading-3">50%</span> DE <br />
              DESCONTO
            </p>
            <div className="max-w-[200px] flex flex-col gap-2">
              <p className="text-white font-bold text-[22px]">
                VAGAS LIMITADAS
              </p>
              <p className="bg-[#d9c034] px-4 py-2 text-center w-full font-bold rounded">
                <a
                  href="https://pay.hotmart.com/A78289712N?off=2vg8j3lo&bid=1674482696855"
                  target="_blank"
                  rel="noreferrer"
                >
                  QUERO GARANTIR MINHA VAGA
                </a>
              </p>
            </div>
          </div>
        </DefaultMarginSection>
        <DefaultMarginSection className="flex flex-wrap lg:grid lg:grid-cols-4 align-items  gap-8  lg:gap-16 justify-center lg:justify-end relative">
          <div className="lg:max-w-[160px] mt-auto flex flex-col items-center lg:justify-self-end	">
            <Image
              src={"/douglas-soave-foto.png"}
              alt={"Douglas Soave foto"}
              width={489}
              height={599.08}
              className="w-full max-w-[300px] xl:max-w-[350px] h-auto mx-auto lg:absolute lg:-left-80 xl:-left-100 lg:bottom-0"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              fill="#000000"
              height="93.8"
              preserveAspectRatio="xMidYMid meet"
              version="1"
              viewBox="0.0 0.0 512.3 93.8"
              width="512.3"
              zoomAndPan="magnify"
              className="w-full max-w-[300px] h-auto"
            >
              <g data-name="Layer 2">
                <g data-name="Layer 1">
                  <g id="change1_1">
                    <path
                      d="M68.1 58L79.8 93.8 49.3 71.6 18.8 93.8 30.5 58 0 35.8 37.7 35.8 49.3 0 60.9 35.8 98.6 35.8 68.1 58z"
                      fill="#f4df6d"
                    />
                  </g>
                  <g id="change2_1">
                    <path
                      d="M68.1 58L79.8 93.8 49.3 71.6 49.3 0 60.9 35.8 98.6 35.8 68.1 58z"
                      fill="#d9c034"
                    />
                  </g>
                  <g id="change1_2">
                    <path
                      d="M171.5 58L183.2 93.8 152.7 71.6 122.2 93.8 133.9 58 103.4 35.8 141.1 35.8 152.7 0 164.4 35.8 202 35.8 171.5 58z"
                      fill="#f4df6d"
                    />
                  </g>
                  <g id="change2_2">
                    <path
                      d="M171.5 58L183.2 93.8 152.7 71.6 152.7 0 164.4 35.8 202 35.8 171.5 58z"
                      fill="#d9c034"
                    />
                  </g>
                  <g id="change1_3">
                    <path
                      d="M275 58L286.6 93.8 256.1 71.6 225.7 93.8 237.3 58 206.8 35.8 244.5 35.8 256.1 0 267.8 35.8 305.4 35.8 275 58z"
                      fill="#f4df6d"
                    />
                  </g>
                  <g id="change2_3">
                    <path
                      d="M275 58L286.6 93.8 256.1 71.6 256.1 0 267.8 35.8 305.4 35.8 275 58z"
                      fill="#d9c034"
                    />
                  </g>
                  <g id="change1_4">
                    <path
                      d="M378.4 58L390 93.8 359.5 71.6 329.1 93.8 340.7 58 310.2 35.8 347.9 35.8 359.5 0 371.2 35.8 408.8 35.8 378.4 58z"
                      fill="#f4df6d"
                    />
                  </g>
                  <g id="change2_4">
                    <path
                      d="M378.4 58L390 93.8 359.5 71.6 359.5 0 371.2 35.8 408.8 35.8 378.4 58z"
                      fill="#d9c034"
                    />
                  </g>
                  <g id="change1_5">
                    <path
                      d="M481.8 58L493.4 93.8 463 71.6 432.5 93.8 444.1 58 413.6 35.8 451.3 35.8 463 0 474.6 35.8 512.3 35.8 481.8 58z"
                      fill="#f4df6d"
                    />
                  </g>
                  <g id="change2_5">
                    <path
                      d="M481.8 58L493.4 93.8 463 71.6 463 0 474.6 35.8 512.3 35.8 481.8 58z"
                      fill="#d9c034"
                    />
                  </g>
                </g>
              </g>
            </svg>
            <p className="text-[#d9c034] font-bold text-[22px]">
              Douglas Soave
            </p>
            <p className="text-semiwhite text-[14px] sm:text-[16px] max-w-[300px] text-center lg:text-left">
              Investidor profissional - ANCORD, Diretor & Partner no grupo Wise
              | BTG Pactual.
            </p>
          </div>
          <div className="col-span-3 flex flex-col gap-8 md:gap-16">
            <p className="text-[26px] lg:text-[32px] xl:text-[36px] font-extrabold text-center text-[#d9c034]">
              O QUE VOCÊ VAI TER COM O TREINAMENTO
            </p>
            <div className="grid lg:grid-cols-4 gap-8 items-start justify-center md:grid-cols-2">
              <SquareWithNumbers
                number={"01"}
                text={"SAIA DO ZERO E SE TORNE UM INVESTIDOR COMPLETO"}
              />
              <SquareWithNumbers
                number={"02"}
                text={"CONHEÇA OS DIFERENTES TIPOS DE INVESTIMENTOS"}
              />
              <SquareWithNumbers
                number={"03"}
                text={"SEGURANÇA E CONFIANÇA PRA VOCÊ E SUA FAMÍLIA"}
              />
              <SquareWithNumbers
                number={"04"}
                text={"FAÇA VOCÊ MESMO SEU DINHEIRO RENDER MAIS"}
              />
            </div>
            <p className="font-bold text-[32px] text-center text-semiwhite uppercase">
              Termina em 7 dias
            </p>
          </div>
        </DefaultMarginSection>
        <section className="bg-[#d9c034]">
          <div className="px-8 py-32 sm:px-16 md:py-16 xl:px-0 xl:w-[1110px] xl:m-auto ">
            <div className="flex flex-col gap-4 items-center">
              <a
                href="https://pay.hotmart.com/A78289712N?bid=1677160401379"
                className="text-[22px] text-[#000000] border-2 border-solid border-dark px-12 py-6 font-bold rounded"
              >
                GARANTIR MEU ACESSO COM DESCONTO!
              </a>
              <p className="text-[#000000] font-bold text-[22px]">
                DE <span className="font-bold">R$ 997,00</span> POR{" "}
                <span className="font-bold">R1 397,00</span>
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#000000]">
        <div className="px-8 py-32 sm:px-16 md:py-32 xl:px-0 xl:w-[1110px] xl:m-auto flex flex-wrap-reverse justify-center md:justify-between gap-16 ">
          <div className="flex flex-col gap-16">
            <p className="font-bold text-orange">FALE CONOSCO</p>
            <div>
              <p className="text-white">
                Instagram:{" "}
                <a
                  className="underline"
                  href="https://www.instagram.com/monitordomercado/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  @monitordomercado
                </a>
              </p>
              <p className="text-white">
                Site:{" "}
                <a
                  className="underline"
                  href="https://monitordomercado.com.br/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  monitordomercado.com.br/
                </a>
              </p>
            </div>
            <p className="font-bold text-orange">NOSSO ENDEREÇO</p>
            <div>
              <p className="text-white">
                Av. Dr. Cardoso de Melo, 1308 - Vila Olímpia
                <br /> São Paulo - SP, 04548-004
              </p>
            </div>
          </div>
          <Image
            src={"/monitor-logo.webp"}
            alt={"Logo monitor do mercado"}
            style={{ width: "auto", height: "auto", objectFit: "contain" }}
            className={"object-contain w-80 lg:w-[370px]"}
            width={370}
            height={92}
          />
        </div>
      </footer>
    </>
  );
}
