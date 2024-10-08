import {Section} from "@/app/components/Section";
import {GradientText} from "@/app/components/GradientText";
import {Project} from "@/app/components/Project";
import {Tags, ColorTags} from "@/app/components/Tags";

const ProjectList = () => (
    <Section
        title={
            <>
                Recent <GradientText>Projects</GradientText>
            </>
        }
    >
        <div className="flex flex-col gap-6">
            <Project
                name="Spark Music Player"
                description="Unleash your personal soundtrack with Spark Music Player. This powerful music app lets you listen to your favorite songs, anytime, anywhere, without burning through data."
                link="https://github.com/x86xFX/SparkMusicPlayer"
                img={{src: './assets/images/sound-waves.png', alt: 'Spark Music Player'}}
                category={
                    <>
                        <Tags color={ColorTags.LIME}>Android Development</Tags>
                        <Tags color={ColorTags.VIOLET}>Kotlin</Tags>
                        <Tags color={ColorTags.SKY}>Jetpack Compose</Tags>
                        <Tags color={ColorTags.SLATE}>Media 3</Tags>
                        <Tags color={ColorTags.ROSE}>Material 3</Tags>
                        <Tags color={ColorTags.GRAY}>Google Play</Tags>
                        <Tags color={ColorTags.ZINC}>Github</Tags>
                    </>
                }
            />
            <Project
                name="Spark Spotify Artist API"
                description="HTTP server that fetch artist's profile details from Spotify API. Written in Kotlin using Ktor Framework."
                link="https://github.com/x86xFX/SparkSpotifyArtistAPI"
                img={{src: './assets/images/api.png', alt: 'Project SparkSpotifyArtistAPI'}}
                category={
                    <>
                        <Tags color={ColorTags.EMERALD}>API Development</Tags>
                        <Tags color={ColorTags.VIOLET}>Kotlin</Tags>
                        <Tags color={ColorTags.YELLOW}>Ktor</Tags>
                        <Tags color={ColorTags.ZINC}>Github</Tags>
                    </>
                }
            />
            <Project
                name="Notification Recorder App"
                description="Real-time capture of incoming notifications using NotificationListenerService."
                link="https://github.com/x86xFX/NotificationRecorder"
                img={{src: './assets/images/notification.png', alt: 'Project NotificationRecorder'}}
                category={
                    <>
                        <Tags color={ColorTags.LIME}>Android Development</Tags>
                        <Tags color={ColorTags.VIOLET}>Kotlin</Tags>
                        <Tags color={ColorTags.SKY}>Jetpack Compose</Tags>
                        <Tags color={ColorTags.ROSE}>Material 3</Tags>
                        <Tags color={ColorTags.ZINC}>Github</Tags>
                    </>
                }
            />
            <Project
                name="MemoX"
                description="Note-taking app with addtional location marking and photo picking features"
                link="https://github.com/x86xFX/MemoX"
                img={{src: './assets/images/note_app.png', alt: 'Project MemoX'}}
                category={
                    <>
                        <Tags color={ColorTags.LIME}>Android Development</Tags>
                        <Tags color={ColorTags.VIOLET}>Kotlin</Tags>
                        <Tags color={ColorTags.SKY}>Jetpack Compose</Tags>
                        <Tags color={ColorTags.FUCHSIA}>Google Maps</Tags>
                        <Tags color={ColorTags.GREEN}>CameraX</Tags>
                        <Tags color={ColorTags.ROSE}>Material 3</Tags>
                        <Tags color={ColorTags.ZINC}>Github</Tags>
                    </>
                }
            />
        </div>
    </Section>
);

export {ProjectList};
