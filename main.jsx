export default function SmokeAlgorithmDemo() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-red-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-green-500 rounded-full blur-3xl" />
      </div>

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-10 py-6 border-b border-white/10 backdrop-blur-md">
        <div>
          <h1 className="text-2xl font-bold tracking-widest text-red-400">
            SMOKE ALGORITHM
          </h1>
          <p className="text-xs text-gray-400 mt-1 tracking-[4px]">
            AI Tobacco Culture Analysis System
          </p>
        </div>

        <div className="flex gap-8 text-sm text-gray-300">
          <span>首页</span>
          <span>传播地图</span>
          <span>情绪分析</span>
          <span>AI 报告</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 px-10 pt-24 pb-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-red-300 text-sm mb-8">
              联合国可持续发展目标 SDG 3：良好健康与福祉
            </div>

            <h1 className="text-6xl font-black leading-tight mb-8">
              谁在制造
              <br />
              年轻人的烟瘾？
            </h1>

            <p className="text-gray-400 text-lg leading-8 mb-10 max-w-xl">
              Smoke Algorithm 是一个基于 AI 的烟草文化传播分析平台，
              通过识别短视频、影视作品与社交媒体中的“吸烟意象”，
              揭示算法如何放大年轻人的情绪成瘾与吸烟认知。
            </p>

            <div className="flex gap-4">
              <button className="px-8 py-4 rounded-2xl bg-red-500 hover:bg-red-400 transition font-semibold text-lg shadow-2xl shadow-red-500/30">
                开始分析
              </button>

              <button className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition text-lg">
                查看传播地图
              </button>
            </div>
          </div>

          {/* Visualization */}
          <div className="relative">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold">AI 内容分析</h3>
                  <p className="text-gray-400 text-sm mt-1">
                    Real-time Smoking Culture Detection
                  </p>
                </div>

                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
              </div>

              <div className="space-y-5">
                <div className="bg-black/40 rounded-2xl p-5 border border-white/5">
                  <div className="flex justify-between mb-3">
                    <span className="text-gray-300">吸烟镜头识别率</span>
                    <span className="text-red-400 font-bold">92%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                    <div className="w-[92%] h-full bg-red-500 rounded-full" />
                  </div>
                </div>

                <div className="bg-black/40 rounded-2xl p-5 border border-white/5">
                  <div className="flex justify-between mb-3">
                    <span className="text-gray-300">情绪诱导强度</span>
                    <span className="text-yellow-400 font-bold">87%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                    <div className="w-[87%] h-full bg-yellow-400 rounded-full" />
                  </div>
                </div>

                <div className="bg-black/40 rounded-2xl p-5 border border-white/5">
                  <div className="flex justify-between mb-3">
                    <span className="text-gray-300">算法推荐风险</span>
                    <span className="text-green-400 font-bold">High</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                    <div className="w-[76%] h-full bg-green-400 rounded-full" />
                  </div>
                </div>
              </div>

              <div className="mt-8 p-5 rounded-2xl bg-red-500/10 border border-red-500/20">
                <p className="text-red-200 leading-7">
                  “今天让年轻人上瘾的，
                  不只是尼古丁，
                  还有算法。”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analysis Section */}
      <section className="relative z-10 px-10 py-20 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-4xl font-bold mb-3">AI 分析模块</h2>
            <p className="text-gray-400 text-lg">
              Analyze smoking imagery across digital media.
            </p>
          </div>

          <div className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300">
            AI Engine Running...
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:scale-[1.02] transition">
            <div className="text-5xl mb-5">🎬</div>
            <h3 className="text-2xl font-bold mb-4">视频帧识别</h3>
            <p className="text-gray-400 leading-7">
              AI 自动检测影视作品与短视频中的吸烟动作、烟雾、香烟与品牌符号。
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:scale-[1.02] transition">
            <div className="text-5xl mb-5">🧠</div>
            <h3 className="text-2xl font-bold mb-4">情绪分析</h3>
            <p className="text-gray-400 leading-7">
              分析“孤独”“叛逆”“自由”等情绪如何与吸烟文化形成绑定。
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:scale-[1.02] transition">
            <div className="text-5xl mb-5">🌐</div>
            <h3 className="text-2xl font-bold mb-4">传播图谱</h3>
            <p className="text-gray-400 leading-7">
              构建互联网中的“烟草文化传播地图”，追踪吸烟意象扩散路径。
            </p>
          </div>
        </div>
      </section>

      {/* Dashboard */}
      <section className="relative z-10 px-10 py-20 max-w-7xl mx-auto">
        <div className="bg-white/5 border border-white/10 rounded-[40px] p-10 backdrop-blur-2xl">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-4xl font-bold mb-3">烟草文化传播地图</h2>
              <p className="text-gray-400 text-lg">
                AI-generated tobacco culture propagation network
              </p>
            </div>

            <button className="px-6 py-3 rounded-xl bg-red-500 hover:bg-red-400 transition font-semibold">
              生成 AI 报告
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-black/40 rounded-3xl border border-white/5 p-6 min-h-[400px] relative overflow-hidden">
              <div className="absolute top-10 left-20 w-32 h-32 rounded-full bg-red-500/20 blur-2xl" />
              <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-green-500/20 blur-2xl" />

              <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="text-7xl mb-6">🕸️</div>
                  <h3 className="text-3xl font-bold mb-4">传播关系网络</h3>
                  <p className="text-gray-400 max-w-lg leading-8 mx-auto">
                    AI 正在实时分析不同平台中的吸烟意象传播路径，识别高风险情绪内容与算法扩散模式。
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-black/40 rounded-3xl border border-white/5 p-6">
                <h4 className="text-lg font-semibold mb-5">高频情绪标签</h4>

                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 rounded-full bg-red-500/20 text-red-300">
                    孤独
                  </span>
                  <span className="px-4 py-2 rounded-full bg-yellow-500/20 text-yellow-300">
                    焦虑
                  </span>
                  <span className="px-4 py-2 rounded-full bg-green-500/20 text-green-300">
                    自由
                  </span>
                  <span className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-300">
                    叛逆
                  </span>
                </div>
              </div>

              <div className="bg-black/40 rounded-3xl border border-white/5 p-6">
                <h4 className="text-lg font-semibold mb-5">平台风险指数</h4>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2 text-sm">
                      <span>短视频平台</span>
                      <span>89%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="w-[89%] h-full bg-red-500 rounded-full" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2 text-sm">
                      <span>影视作品</span>
                      <span>73%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="w-[73%] h-full bg-yellow-400 rounded-full" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2 text-sm">
                      <span>社交媒体</span>
                      <span>81%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="w-[81%] h-full bg-green-400 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-500/10 border border-red-500/20 rounded-3xl p-6">
                <p className="text-red-200 leading-8 text-lg">
                  “烟草公司正在退场，
                  但新的成瘾制造者已经出现。”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-10 py-16 border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold text-red-400 mb-2">
              Smoke Algorithm
            </h3>
            <p className="text-gray-500">
              AI Tobacco Culture Analysis Platform
            </p>
          </div>

          <div className="text-gray-500 text-sm text-center lg:text-right leading-7">
            基于 AI 的烟草文化传播分析系统
            <br />
            SDG 3 · Good Health and Well-being
          </div>
        </div>
      </footer>
    </div>
  )
}
