<template>
  <div class="border">
    <div class="title">男女比例</div>
    <div class="chart6"></div>
  </div>
</template>

<script>
export default {
  name: "Chart6",
  props: {},
  components: {},
  data() {
    return {};
  },
  mounted() {
    this.res = this.$root.data.res;
    this.echartsInit();
  },
  methods: {
    echartsInit() {
      const sexIcon = {
        a: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAAXNSR0IArs4c6QAAFjZJREFUeF7tnQv8/9dcx18qEpLbiAjJJUpENGoUuTy0idwqSy651yKGXGtFSBYykZQ1t5m27LHCaLJccxuKYQ0hc9nIkMqjx5Nz7Oyz3/f3+XzO55zzOedz3u/H4/P4X76fc3ud8/qc2/tyIZkYAobATgQuZNgYAobAbgSMIDY6DIF9EDCC2PAwBIwgNgYMgTgEbAaJw81SdYKAEaSTjrZmxiFgBInDzVJ1goARpJOOtmbGIWAEicPNUnWCgBEkfUf/vKTrSbqOpGtLeqOkV0k6LX1RlmNuBIwgaRH+BUmv3iPLL0i6l6QT0xZnueVGwAiSFuFXSLrrjizfLOm2kr6ctkjLLScCRpB06B4oCRLsJ8+T9KB0RVpOuREwgqRD+BmSHj4hOwgCUUwaQMAIkq6T2IwfNDG7n5V0ysR37bUVETCCpAH/UpLOnpnVoyU9dWYae70wAkaQNIDfWtLrIrL6B0m3j0hnSQohYARJA/STJD0xMqsPSnqIpDdEprdkGRHoiSAM4ltIumWA50slPU3SexZi/I+DfOdm9zVJT5b0XEmfn5vY3s+HQC8EeaikZ++A8Vy3F4Ao/x0J9VKC+GLPcCQ5StJXIutiyRIi0ANBLirpdElXGcHtXxxRXhmBbyqC+KI/4IjCjGKyIgI9EOS6khhwU+VoR5Q5aVITxNf1fZJe4p6PT22AvZcOgR4Isks/aj8Uz3F7E45hvzEB7lwE8UV/MSDKqRPqY68kQqAHghwm6chIvN7iiHL8SPoTJB0SWcbcZBwNnyzp9QkOF+aW3d37PRCEDe8DF/bsX7o9wTt35MOy7J4Ly4hJ/nZHFAhjx8QxCI6k6YEgKZc/z5fEMyQKm+m1lRA/6mYWP7vMvdnPMLzaz9IIEteHQ6KwVzk8Lqssqb4kieXhW92f/J3/M5mJgBFkJmCD1/9O0ickXX4fO5BlJaRJzSafzX34pMl547kYQTbewTuax5FxSBaOk032QMAIYsMCBN4k6W+d7fzHDJLzEOiBICyDDrZOn4TAVx1JIAvPlDugSRm3+lIPBFmiadtqv6ao94ccSY6ThBrOFAkVQdn3vHtKoprf6YEg95CE1q5JPAIvk8Rdz0k7suCS9GEDjWacU6Ch/JT4YtdP2QNBruxunC+7PtzN14A7lr9xZPHLrxtI4q4Jq8q95FhJd2u15T0QhL75E/eFa7Wfaqv3uyQd457fl3T/kQo2S5KtE+SKboOOwqJt1NPT7ExJV5uY7RMkHTHx3Wpe2yJBsA/3z42qQdoq8nW3R+FWvxnZCkEgwp0l3UnSjzSDfn8VZZN/h5aa3TJBLudIATFw6WnSBgI413tmG1WVWiTIRST9liTsPDihMmkLgU9JurGkT7dQ7dYIgvks5/E/0QK4VsedCPyeJC5wq5eWCDLXtrx68DuuYDOzSCsEQYWByyiT7SDQxCzSCkEweb33dsaGtcQ578aJd9XSCkHOknRA1Uha5WIQQCGSMHXe+vH9kvg/ns/FZJg6TQsEseVV6l5vI7/bSXrN2lU1gqzdA1b+LgTYyKMlvMuTTBHkWiAIQLxWEtFjTfpCgBmEmWQ1aYUgKMThScRIstpQWa3g+0l64Vqlt0IQ8OEG/e6Sru+eH5d0hbWAs3KLIcCH8QHFShsU1BJBfNUPlfR0I8daQ6Z4uTjlI8DQKtIaQcy+fJVhslqhxGu5mSQMtFaRlgiCbTOBL036QeA3JT1nzea2QhBsoW+1JlBWdnEEcAaOWe+q0gJBXiyJfYdJXwigPYHx2xfWbHbtBHmE25CviZGVvR4COP2743rF120wFRt7fE08rez0CDzW+ddKn/OEHGudQfBhxe25GUZN6MQOXjnQhXIo3tRaCfICSdygmhgCIPBySXjILC41EuTBkv6sOBJWYO0I4JwDh9pFpTaC4OgNR8lXKoqCFdYCAv8k6RalK1obQeymvPQIaKu8+0rCurSY1EQQmz2KdXuzBeGX4OdK1r4mgtjsUbLn2y3r9pKIFV9EaiGIzR5FunsThRB+oZhmRS0E+e2W3FFuYpi13QhUUD5Yogm1EOQNkqp3AVOiQ6yMSQj8bqnIVTUQBD+t75gEi71kCHwLgbdLumkJMGogCBGKHl+isVbGphBAV+/1uVtUA0GIhEqcOxNDYA4ChNX7nTkJYt5dmyB4KUEp0cQQmItAkZv1tQnyVEmHz0XG3jcEHAJofWc1qFqbICc473nW44ZADAJEFsu6AlmbIB+W9MMxyFgaQ0BS9hAKaxKEGIOftW42BBYgcEru+7M1CXJzSacuAMeSGgIgkHUMZ818pP+wGMRy0MQQWILA90v6zJIM9ku7JkGeJQnHYCaGwBIE8NF82pIMaiUIuv0ExzExBJYggA4fe5EssuYMgs+jg7O0yjLtCYHNEgS9/l/tqSetrVkQ2CxBjpL0wCyQWaY9IbBZgjxN0iN76klraxYENkuQx0k6IgtklmlPCGyWIIdJOrKnnrS2ZkFgswS5d2kfR1m6xzJdG4HNEuQuko5dG10rv3kEri3p9FytWPMe5DaSiINtYggsQeDCkv53SQb7pV2TIJjZYm5rYgjEIvBxSVeNTTwl3ZoEuZSks6dU0t4xBHYgsGl1d9oMQSCKiSEQgwCOrHFonU3WnEFolHk0yda1XWTMXdof5mzp2gQhIMov5mxgwbzxDlnU83jBttVa1K9IemnOyq1NkGdKwi9vy3KipDdJwkOLSVkEbiTpXTmLXJsgLTut5g4HguNI+YU5O8ny3hOB/5F0kdzYrE0QllfF484tAPVtLjbF30vi73zBCBnXq+BV5AGSMHstLf8s6adzF7o2Qda8C+GAgFvYi+0DMi72IQDOtSEEj5eLS/py7g5aIf9XSPo3SY+SdNE9ysdR2zEudvl/uiXODVeoZxeuR9e6C/nTYO/DQP++4OFWFicAPF/f0fFXl/QeSZdcYWDkKvIMSeCCrwDkms6g7cfcvz8iCXefrxvg8hJJv5yrUvvk+2uSjs5d7tozCO37mKQfzN3QIH86dIklI7PeqyVduWCdcxeFdSf2Oe+LKOgPJD02It3SJFmdNfjK1UAQpmuO60rIyc7V6VcjC0NzlBjubMy3ICwh/0jSXy9ozH1WOKRgdi+y76mBIA92g25BH01K+n5Hjn+f9PYFX3qQpOdGpk2djM3xExdk+g1Jz3H7iKU+pfBMg4eakkIQT4J5ZpcaCHJ9Se/N3lLpXpJeHFnOn0u6f2TalMme7TbP2NIwk80VDhVQz+BJifmnJBGItZQQF4RNenapgSA08ouZN7xLvjilCLxfZ7NvYink9wjXlfSBGaPjrIAYOAxPLc+Q9PDUme6T3/Uk/WuJ8mohyEmZp8wlsbXvkVudYZ+OfrOkP95xVzQlrjz3NTyvkvTJjAOq5DLrLZJulrEt58u6FoIQtTSX0hnLKpZXsfLoUhFVXQX/yxHi+AmXqETowgk4QjqWOp92/+bOJvYwIgarUqEssoc8CBtfC0EOkvTGmF6ZkOYmC6PolppBCEiJVgHEyPm1nwBZ1Cul9OqKLa9AoRaCfGcms0ncm94xqrvPS8Tmk9v0Ky3MZ5icfRcXbyg68nEgtHHLwjKWpXJOYd/1ozkLGOZdC0GoF+vtAxM3ngtBNrhLhctBjlWXqOaz/MG5AGTAEi6bw+WljV2QPrf5QtHlVU0zCHVJ7WmRSzC+Nv+3oMOHSX9AEje4l5d0gCTUVPaTDzlSQAz2CFuX3I44CHMA/sWkphmEpRDr71RS/GuTquKN5/MySXfP2AZiWn40Y/7ny7omghBMxyvKpWg/1n2lb3hT1Lv1PHId+XLvwf0P/pw5+i4iNRHk5ZLulqjV/yHpKonysmzmI8DR+qHzk+2b4jhJv+T2qv5oO3ERF8yuJoJwtJnqpAjt1NQdlL0zNlQAhy0cuqQSNv/o0j3eZZg1LmFY6VoI8kOJ15V3lfTKVL1j+UQhQIBWArWmkFu7QxHvoCGrP94aCRKuW9Gbut1CVPG2h9e91HItSdzZYHHXulzanQi9M9MJGxe0oQVmLF7cD91U0mUkfd5l0jVBsE5b4srlHEl0fkp5uiRu1L2RFB3FJR8bxmInKokaRFQvTAy8pSDZot+EbtdrE5Xhs+HOBy2JJeK1sL9X0peMIJI3SuLEIka4mV7aKb5cvlxvHalES8fJrONR1dgleGpJdVBCGY+QxMclVtiXshrgLgurU6xPka5nEBrP9BzrZwo7iYfG9sgg3dSDg59KtJxIVO09s5kaVRjbl1SxI3GKwYVtrLApx6QX4YIQPwDdE+TObspHO/QSEcjihub5EemGSaaok/s02KgfkqDMXFmg9Ttn+cSmGOXJFMI+hA9ejISXguE+tbsZ5AqScCGD+C8YJqEPiUAVWwHW1EsF9zechk2Rzzr1kynvrvHOXAd9KV16xvYjzvjCUzBWBuydkKsFy62seNZyzEsjOXXics9rbLJsiRnozDrnJkDtEzM9l3DClcNaL0FTvuke554zMsI6EPX1FMJHho/NXBnOYrglwt0SJ4ix+9O5dahG3Z2K4+P2Dq4F15GEot/UdbNvOKdLl5uNwt4JcO7Al2qqFNURmlop996LJP36jDQPSxhglRNFnM3NkaGJdLi84n6lmH+AmmYQvnDeERhTK1PsXGMlbLaxIU8hc9QlznRftxTl5siDTfdRMzLmJCtl/EgIMufoHWXHcNbB2hSrU+ROiZVa94WlJoJ8l3NKwOyBkqEPJYD3jamDHpUENvkphK8U+6EpwqEAhwO1yhwfwng+4Zg8ZXg8FA2n+hIb+tzlgpDQEpxipTzCn9RXNRGECocnR3jre7KkqTbhHMmybl1yrDgEDUtCBteY1IbjXvVFUxqN6TFJdQoYlsMHj2XSFPkNSX8RvBhu8v3KYko+Sd6prWP5WnAsyHoehwOAiqrBFJLgFucxSVA5fyb7nWZxoMBypIgLmgRtGzu6Tr208lWeaiOC2suNg3aiVeEtQvEJjEFWUamNIDQ+tAsJ7xd+xh37Yvb63XugRCfkcqKMZvDBziT4OyTRkQRuYcC1JhyDo77BzMjDSSHaAlzMLvWyuAuLqUe94ewV3pyTL+SAJEWlRoIAAKcYt3VIoKpweIAKQVNCv0iotmMKSyentmkv2hkbLgx7/rGPSRiQc3gDPxwDxaCqlSAAwMmQj4HNTMLXxft8CgHy61suGku6vyzWSRspiLsL3IX6D59vFs4sOLr1BOJjGKoZraqlUDNBADAME816n+XX0Iw29MeEMwVutU3qROCvAid+KHnSp6cGH77hUmxVcgBh7QShjqErGTbuR0piWeU3xpxs8AVCOO+fejRb5xDadq3CU0HvAI4DGXxq+ccjUEVftkAQACN+BRGFQmFT7uNa4H8WWeWkY9tjOmnrvuYOWDjkwF8wmhNDP7vcg+ACCi2K1aUVgvjZAdXnyw5Q4/bcG/8Q94Kwbj34oFp98MyswJiXfGw9iL8COaqRlggCaNymMpOggrLLwQOxM1jrmtSFAAqQhEkYCrfkrAZ4qvuwtUYQDy4XipCE6KqsYQk4yVEvkvM+pK4h11ZtUBPxYZs5bEEZFa0HtKarlVYJsheggM35+eccWXZFqK22MzZcMYgBQZCl4SiKwrQlgoQxBFFY5PTLpA4EwghULZgnfxu1LREkdAvDZi/GGrGO4bStWqAWxJE8vs+a83i5JYIwrHAWh3tKbmdRetvr5n1bw6/+1mDbwb4QackDzDcrvDWCEA+ES8QmO6P+sR5Vw1CTt6nl1RYJwjLrI856zWaRqPGcNBHLKpZXLLMwY4AgTcnWZhDAD71fNDelNzV6xiuLFi7O45Am76e2SBDuRLBx4MbdZpHxQZzrDXxXcQmI4GMLa8/mZIsEoRMw1/Ue+WwWWWdY4qgOh3UIRm4nrFONZaVulSDEDmQWQUfLZpFlYyQmdeiojpPFqQ74YsrKmmarBPFrXqzUEJtFsg6j82WONgOe77HNQfArgJf3JmXLBKFDvOkurmywZEsZ9ajJDi9Q6dBJHd5J8FLSrGydIOgAneyOGSEHJIEsJnkQwCsKsSYR4qbg2yxHIKM8td8j160ThCaHatbPk4TOlkl6BPAHwIztnfzhKfOY9MWUzbEHgoBoeJsLQSCKSVoE8F/l3S5t5kPUC0G40cUclz8RwgjbfiQdQR4n6QiXHY4YWFqdlS779XLqhSAgHCrN8W9i3tl+ZPnYw5k09uVeUBYN/728hBVz6IkgwIy/Je+EjvAGfkZZsQuaLnro4O0pgRf2phvmK98bQWj3cYEHeHwy4dLUJA4BrDYv7JI2ZSk4tbk9EgRswpAK+Gr6yamA2XvfRoDwCDdw/2pW12qsP3slCPsPHDV/jwNoGJNiDLfefyfUHM4yEHwBTI390RxuvRKEjiJQD/HuvIRBe5rryEIVxuM6Xu29bzLc9FyyUNmrFNMzQQAcr37MHl6GsfFW6ZRKC8ULIo4w/J4Dc+ZdvskqbcL8avVOEBDDgzwB6vHIiKCWjXq2yXkI4Fk/vFw9KQi4ummcjCDf6l4i46JD5OMiHu80gCFO7/LIgTtQnIcTBbcLMYKc180Xc1F2fRDQcxxJGBA9Cvb9T5B0WNB4YkZijNaNGEEu2NVcdhET0UuPs8ldHDm8U3DCOIOJDzNhBOkGgb0biroEQUH9UWYvswkaucwaxObwguks5EgZFrqZ4WUzyO6uYvMOSXCS3cNsgk8xyHGtnpdUw+FgBBn/lmFfTRBKf8rFbIJrIVQrTh9PXv0bfAggxn2CmnI4gZkyy8uuxQgyrftRqYAk4fEv4eCIcAVRcBDRmuDEjdkRGw5vP04bOJSAHHwIuhcjyLwhMJxNfOpjHVFOnJdd8beJ8Q4peIj7HorNGnt0hxFk/hhlNmE5cmiw7PK54CjNzyrzc86XgsMGTwyCZ4ZCIBtmQTzi26wxAMcIEj8oWbsTDo7Hn3b53HBUgAoL6vQ8p8UXE50S23BU+XkOCRQzfYbUC2IcLYngmiY2g2QZA1wwQhIGIaGM95IzJZ3i/EPhIwpjrdTCEe1Bzg8VGgHhaZQvi/sMIgJjE2MBhib0gM0gE0Ca8cqumN/DLCAM0Xk/OXjwAsn/nb1Hmewf2EzzHBD8/eqS8IPrvYkMk3pSQAwe/m0yEQEjyESgIl6DLPimvZXT8br0jDy+EhDHkwJ9sanCDIURE3ui1xgppsJ2wfeMIPHYzU15G0cY9gTXcAqSc/PY9T6RYnHUhucWbr6xkjRJgIARJAGIkVlgaARR/MMMg9Pt4XOu876CBxb/d6whIcQZ7k+L6BvZCWPJjCBjCNnvXSNgBOm6+63xYwgYQcYQst+7RsAI0nX3W+PHEDCCjCFkv3eNgBGk6+63xo8hYAQZQ8h+7xoBI0jX3W+NH0PACDKGkP3eNQJGkK673xo/hoARZAwh+71rBIwgXXe/NX4MASPIGEL2e9cIGEG67n5r/BgCRpAxhOz3rhEwgnTd/db4MQSMIGMI2e9dI2AE6br7rfFjCBhBxhCy37tGwAjSdfdb48cQMIKMIWS/d42AEaTr7rfGjyFgBBlDyH7vGgEjSNfdb40fQ8AIMoaQ/d41Av8POXNt9q9llKEAAAAASUVORK5CYII=",
        b: "data:image/png;base64,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",
      };
      const year =
        this.res.nationwide_data.statistics_class_list[1].year_list.slice(60);
      const male = this.res.nationwide_data.data_list[1].slice(60); //载入数据
      const female = this.res.nationwide_data.data_list[2].slice(60); //载入数据
      let optionXyMap01 = {
        timeline: {
          data: year,
          axisType: "category",
          autoPlay: true,
          show: false,
        },
        color: ["#9fe6b8", "#ed8884"],
        options: [],
      };
      for (let n = 0; n < year.length; n++) {
        optionXyMap01.options.push({
          title: {
            left: "0%",
            top: "2%",
            text: [
              `{a|${year[n]}年 }`,
              "{b|男性-女性=}",
              `{c|${parseInt(male[n] - female[n])}万}`,
            ].join(""),
            textStyle: {
              rich: {
                a: {
                  color: "#fff",
                  fontSize: 16,
                },
                b: {
                  color: "#fff",
                  fontSize: 16,
                },
                c: {
                  color: "#eb7e73",
                  fontSize: 20,
                },
              },
            },
          },
          series: [
            {
              id: "pie",
              type: "pie",
              radius: "80%",
              center: ["50%", "55%"],
              data: [
                {
                  name: "男",
                  value: male[n],
                },
                {
                  value: female[n],
                  name: "女",
                },
              ],
              label: {
                formatter: function (params) {
                  let str = "";
                  if (params.name == "男")
                    str = "{a|}" + "{rate|\n" + params.percent + "%}";
                  else str = "{b|}" + "{rate|\n" + params.percent + "%}";
                  return str;
                },
                position: "inside",
                rich: {
                  a: {
                    width: 30,
                    height: 30,
                    lineHeight: 30,
                    backgroundColor: {
                      image: sexIcon.a,
                    },
                  },
                  b: {
                    width: 30,
                    height: 30,
                    lineHeight: 30,
                    backgroundColor: {
                      image: sexIcon.b,
                    },
                  },

                  rate: {
                    fontSize: 12,
                    color: "#fff",
                  },
                },
              },
            },
          ],
        });
      }
      let chart6 = this.$echarts.init(
        document.querySelector(".chart6"),
        "westeros"
      );
      chart6.setOption(optionXyMap01);
    },
  },
};
</script>

<style lang="scss" scoped>
.chart6 {
  height: 220px;
}
</style>