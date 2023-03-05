export const Projects = {
    bgText: "I'm currently helping with technical sound design for the upcoming Baldur's Gate III, working with the fantastic audio team at Larian Studios. " +
        "It's something of a dream project to work on for me because Divinity Original Sin II was one of my favourite games in recent memory." +
        "\n\nAs a technical sound designer on the project, I'm writing a lot of Python scripts for Wwise, helping smooth out the workflow of the asset generation pipeline. " +
        "I'm also helping out with technical implementation both in Wwise and in Larian's in-house game engine, as well as working on sound design and sound systemics.",
    impacterText: "I worked on the C++ implementation for the Impacter Wwise plugin. This was an extremely fun project to work on, " +
        "translating Python audio analysis and synthesis code into C++ using the Eigen library, and designing the simple plugin UI that exposes physics-inspired parameters to the user, " +
        "allowing them to cross-synthesize impact sounds and simulate shrinking or enlarging objects, as well as altering the impact velocity and position." +
        "\n\nI also implemented a destructible demo environment in the Unreal engine in which all of the sound was implemented using Impacter, and the plugin parameters were driven by " +
        "the game physics.",
    akUnrealText: "I worked a lot on the Wwise Unreal integration at Audiokinetic. This involved the 'componentization' of Spatial Audio features such as Rooms, Portals, Geometry and Acoustic " +
        "Textures. In other words - creating individual components for these features such that they can be used in custom Blueprints, as well as through Spatial Audio Volumes. Building upon this " +
        "componentization, I added functionality to the Unreal integration for estimating the reverb Decay and HF Damping values for a reverb effect automatically, when Reverb and Geometry " +
        "Components are used, by analysing the geometry to which they are attached. I also updated the way that acoustic textures are assigned to surfaces on Spatial Audio Volume objects, " +
        "as well as their display in the viewport.",
    ak3DMeterText: "I implemented the 3D Meter in Wwise by updating an existing prototype, and adding a pixel shader for faster and smoother graphics. Using the in-built Wwise ambisonic decoding " +
        "functionality, the ambisonics channel data is decoded onto virtual speaker positions around a sphere in the local bus space. The pixel shader is used to construct a directionality heatmap " +
        "from this data. The 3D Meter thus allows users to inspect the directional information contained in an ambisonics bus and how it is affected by the sources distributed around the listener.",
    kimaText: "My Engineering Doctorate focused on the analysis and representation of musical timbre. As part of this research, I developed a real-time audio feature extraction tool that was " +
        "used to analyse audio in real time and extract timbre descriptors. These timbre descriptors could then be mapped to the parameters of a visualisation algorithm. " +
        "I made use of this feature extractor tool in various large-scale live audiovisual installations, in collaboration with Analema Group - a London-based arts collective. The largest of " +
        "these was held at the Roundhouse in London, and featured a 360 degree projection of audio-reactive visuals, driven by microphones that could be used by the attendees. For this " +
        "installation, we used the 'Wekinator' machine learning tool to construct the mappings from timbre features to visualization parameters."
}