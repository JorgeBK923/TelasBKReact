import { Play } from "lucide-react";

interface VideoTutorial {
    thumbnail: string;
    duration: string;
    title: string;
    description: string;
}

const tutorials: VideoTutorial[] = [
    {
        thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsYMQ1HWu3li0PAgLk5M51d5Xmlmw3oPvnx4bkNUDlpRujip55D3bmtAjpaAGB7walfwmCuWoW57-kFVzxq-_gvcWb5Fk79NkUlmvJsWOdxw_5d6csKwY2MF6bFnW4c563UcwpQTnDRjVovDP70uFdec5Gmg_6xm_oCdMSzMsY0C2RQVt-dxou-MsNcB5_pOZ9OECpblfzkkgFKX3e-yVqUI5IvGImJTGELJ0IMl2MKT58dCW6EwzOeSB1fal3ggfyiGnTlHT2nww",
        duration: "04:20",
        title: "Guia de Setup Inicial",
        description: "Configurando seu ambiente em 5 minutos.",
    },
    {
        thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjSnziwML5M_rqhxeulXGLIAMv8FIeSq-dr2qcsdbLnYbWZRMeZ53b2SD2RWq5DE8iWO_cHPWgW2JzPRiNAcg0zOjJLHF1t3_LjKHD0mB52cIDtqHH5AbEBgXHJpOPlpS3u1jsZhofepCYciyL1lrFxwNCi0bwLBwhd9gCUPcst2hoyuc--6z4n8HOV2fmbihn3yGNyrJYeMlyVgLcXCWqvSFK-qNoZ8PQl45yiGRCHRkdMRPBxGLpjXDs-x7BdDMUenATgV_MqP8",
        duration: "12:15",
        title: "BDD Avançado",
        description: "Escrevendo cenários complexos com Gherkin.",
    },
    {
        thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuDEkUDTltkuWra6UKwPJqHuqJkJNO9FKh5baPrw1k4agHuulhEPLFIqQGsyS0YNHYCOwHkoLnUXC1uZfMt53fAibUPcLpfvX9FRonTRjCI6LZR_4zFWIwQ-KsDAjxTcdAL_04P4qrliZenb-S-BxCceyBhG7mW-7Rwv4o6ktO_IJ5VDtjy8FWGyWywbdBYI9ketFo-rNJ6ZxWIC1CpmHiM8NtrosQ8WiUPfgaO5GipBksalikylXvYHAQ13JsgaA3t0Y3jap8fk9qs",
        duration: "08:45",
        title: "Gestão de Equipes",
        description: "Permissões, roles e fluxos de aprovação.",
    },
];

export function VideoTutorials() {
    return (
        <section>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Tutoriais em Vídeo</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {tutorials.map((video) => (
                    <div key={video.title} className="group cursor-pointer">
                        <div className="relative aspect-video bg-slate-900 rounded-xl overflow-hidden mb-3">
                            <div
                                className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-500"
                                style={{ backgroundImage: `url('${video.thumbnail}')` }}
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="size-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                                    <Play className="size-6 text-white fill-white" />
                                </div>
                            </div>
                            <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded font-medium">
                                {video.duration}
                            </div>
                        </div>
                        <h4 className="font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{video.title}</h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{video.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
